package com.example.vitrine_virtual.produto.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.vitrine_virtual.produto.modelo.Produto;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, String>{
    
}
