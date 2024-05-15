import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';

export default function ProductList() {
                   
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
        try {
            const response = await listarProdutos();
            setProdutos(response.data)
        } catch (error) {
          console.error(error);
        }
    };

    // Chamando a função para buscar os produtos
    fetchProducts();
  }, []);

  // Renderiza o componente
  return (
    <div className="container w-100">
        <div className="d-flex justify-content-start">
          {/* Mapeia os primeiros produtos e retorna um elemento */}
          {produtos.slice(0, 3).map((produto) => (
            <ProductCard idProduto={produto.id}/>
          ))}
        </div>
    </div>
  );
}






