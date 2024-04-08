package com.example.vitrine_virtual.produto.controle;

import org.springframework.web.bind.annotation.RestController;

import com.example.vitrine_virtual.produto.modelo.Produto;
import com.example.vitrine_virtual.produto.servico.ProdutoServico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class ProdutoControle {
    
    @Autowired
    private ProdutoServico produtoServico;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Produto produto) {
        return produtoServico.cadastrar(produto);    
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Produto produto) {
        return produtoServico.alterar(produto);
    }

    @GetMapping("/usar/{id}")
    public ResponseEntity<?> usar(@PathVariable Long id) {
        return produtoServico.usar(id);
    }
    
    @GetMapping("/listar")
    public Iterable<Produto> listar() {
        return produtoServico.listar();
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<?> remover(@PathVariable Long id) {
        return produtoServico.remover(id);
    }


    
}
