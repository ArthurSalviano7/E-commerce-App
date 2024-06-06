import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CartInfo({ cartItems }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcularTotal = () => {
      let valorTotal = 0;

      cartItems.forEach(item => {
        valorTotal += item.produto.valor * item.quantidade;
      });

      setTotal(valorTotal);
    };

    calcularTotal();
  }, [cartItems]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="w-25 card">
      <div className='card-body'>
        <h2>Valor Total</h2>
        <hr />
        <h4>{cartItems.length} produtos no carrinho</h4>
        <ul className="list-group mb-3">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.produto.descricao}</span>
              <span>{item.quantidade} x {formatCurrency(item.produto.valor)}</span>
            </li>
          ))}
        </ul>
        <h3>Total: {formatCurrency(total)}</h3>
      </div>
      <button className='btn btn-warning py-3'>Confirmar Compra</button>
    </div>
  );
}

