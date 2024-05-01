package com.example.vitrine_virtual.usuario.controle;

import org.springframework.web.bind.annotation.RestController;

import com.example.vitrine_virtual.produto.modelo.MensagemApi;
import com.example.vitrine_virtual.usuario.dto.LoginRequestDTO;
import com.example.vitrine_virtual.usuario.dto.RegisterRequestDTO;
import com.example.vitrine_virtual.usuario.dto.ResponseDTO;
import com.example.vitrine_virtual.usuario.modelo.Usuario;
import com.example.vitrine_virtual.usuario.repositorio.UsuarioRepositorio;
import com.example.vitrine_virtual.usuario.seguranca.TokenServico;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final UsuarioRepositorio usuarioRepositorio;
    private final PasswordEncoder passwordEncoder;
    private final TokenServico tokenServico;

    @Autowired
    private MensagemApi mensagemApi;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body) {
        
        Usuario usuario =  this.usuarioRepositorio.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("Usuario não encontrado!"));
        
        //Caso a senha esteja correta, gera o token e retorna
        if(passwordEncoder.matches(body.password(), usuario.getSenha())){
            String token = this.tokenServico.gerarToken(usuario);
            return ResponseEntity.ok(new ResponseDTO(usuario.getNome(), token));
        }

        mensagemApi.setMensagem("Dados de login incorretos, tente novamente");
        System.out.println(mensagemApi.getMensagem());
        return new ResponseEntity<MensagemApi>(mensagemApi, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO body) {
        Optional<Usuario> usuario = this.usuarioRepositorio.findByEmail(body.email());

        //Verifica se o usuário já existe no banco de dados, se não existir, cria a conta
        if(usuario.isEmpty()){
            Usuario novoUsuario = new Usuario();
            novoUsuario.setSenha(passwordEncoder.encode(body.password()));
            novoUsuario.setEmail(body.email());
            novoUsuario.setNome(body.name());

            this.usuarioRepositorio.save(novoUsuario);

            String token = this.tokenServico.gerarToken(novoUsuario);
            return ResponseEntity.ok(new ResponseDTO(novoUsuario.getNome(), token));
        }
        
        mensagemApi.setMensagem("Registro não pode ser concluído, email já cadastrado!");
        return new ResponseEntity<MensagemApi>(mensagemApi, HttpStatus.BAD_REQUEST);
    }
    
}
