package com.example.vitrine_virtual.carrinho.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.vitrine_virtual.carrinho.modelo.ProdutoCarrinho;

public interface ProdutoCarrinhoRepositorio extends JpaRepository<ProdutoCarrinho, String> {
    
}
