
import React from 'react';
import './Product.css'; //  CSS para estilos 

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.url_imagem} alt={product.descricao} />
      <h2>{product.descricao}</h2>
      <p>Categoria: {product.categoria}</p>
      <p>Avaliação: {product.avaliacao} / 5</p>
      <p>Quantidade: {product.quantidade}</p>
      <p className="price">R$ {product.valor.toFixed(2).replace('.', ',')}</p>
    </div>
  );
};

export default Product;


