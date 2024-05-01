package com.example.vitrine_virtual.comprador.modelo;

import org.hibernate.annotations.UuidGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "compradores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Comprador {
    
    @Id
    @UuidGenerator
    @Column(name = "id", unique = true, updatable = false)
    private String id;
    private String nome;
    private String cpf;
    private String endereco; //Endereco para entrega
    private String telefone;

    //Historico De Compras

}
