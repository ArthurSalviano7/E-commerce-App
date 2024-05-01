package com.example.vitrine_virtual.usuario.controle;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/usuario")
public class UsuarioControle {
    
    @GetMapping()
    public ResponseEntity getUsuario() {
        return ResponseEntity.ok("sucesso!");
    }
    
}
