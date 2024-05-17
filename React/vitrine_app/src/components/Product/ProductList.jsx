import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';

export default function ProductList({filteredProducts}) {
                   
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
        try {
            setProdutos(filteredProducts)
          } catch (error) {
          console.error(error);
        }
    };

    // Chamando a função para buscar os produtos pela api
    fetchProducts();
  }, []);
  

  // Renderiza o componente
  return (
    <div className="container">
        <div className="d-flex justify-content-start flex-wrap">
          {/* Mapeia os primeiros produtos e retorna um elemento */}
          
          {console.log(filteredProducts)}
          {filteredProducts.map((produto) => (
            <ProductCard idProduto={produto.id}/>
          ))}
        </div>
    </div>
  );
}








