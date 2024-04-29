package com.example.vitrine_virtual.comprador.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.vitrine_virtual.comprador.modelo.Comprador;

@Repository
public interface CompradorRepositorio extends JpaRepository<Comprador, String> {
    
}
