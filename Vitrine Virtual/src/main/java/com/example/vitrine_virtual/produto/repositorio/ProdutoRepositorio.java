package com.example.vitrine_virtual.produto.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.vitrine_virtual.produto.modelo.Produto;

@Repository
public interface ProdutoRepositorio extends CrudRepository<Produto, Long>{
    
}
