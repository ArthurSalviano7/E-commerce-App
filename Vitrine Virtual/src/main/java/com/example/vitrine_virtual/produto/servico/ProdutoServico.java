package com.example.vitrine_virtual.produto.servico;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.vitrine_virtual.produto.modelo.MensagemApi;
import com.example.vitrine_virtual.produto.modelo.Produto;
import com.example.vitrine_virtual.produto.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {
    
    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    @Autowired
    private MensagemApi mensagemApi;


    //Função para o cadastro de produtos
    public ResponseEntity<?> cadastrar(Produto produto){

        if (produto.getDescricao().equals("")) {
            mensagemApi.setMensagem("O produto deve ter uma descrição");
            return new ResponseEntity<MensagemApi>(mensagemApi, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<Produto>(produtoRepositorio.save(produto), HttpStatus.CREATED);
        }
    }

    //Função para alterar informações do produto
    public ResponseEntity<?> alterar(Produto produto){

        if (produto.getDescricao().equals("")) {
            mensagemApi.setMensagem("O produto deve ter uma descrição");
            return new ResponseEntity<MensagemApi>(mensagemApi, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<Produto>(produtoRepositorio.save(produto), HttpStatus.OK);
        }
    }

    //Função para listar produtos
    public Iterable<Produto> listar(){
        return produtoRepositorio.findAll();
    }

    //Função para retornar um produto pelo id
    public ResponseEntity<?> usar(Long id){
        Optional<Produto> produtoOptional = produtoRepositorio.findById(id);

        if(produtoOptional.isEmpty()){
            mensagemApi.setMensagem("O produto não foi encontrado");
            return new ResponseEntity<MensagemApi>(mensagemApi, HttpStatus.BAD_REQUEST); 
        }else{
            Produto produto = produtoOptional.get();
            return new ResponseEntity<Produto>(produto, HttpStatus.OK);
        }
        
    }

    //Função para Remover produto
    public ResponseEntity<MensagemApi> remover(Long id){

        produtoRepositorio.deleteById(id);

        mensagemApi.setMensagem("O produto foi removido com sucesso");
        return new ResponseEntity<MensagemApi>(mensagemApi, HttpStatus.OK);
    }
}
