import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartItem from './CartItem';


export default function CartProductList({ cartItems }) {
  cartItems.map((item) => (console.log(item.produto)))
  return (
    <div className="w-75 border-right border-warning d-flex flex-column">
      {cartItems.map((item) => (
            <CartItem idProduto={item.produto.id} quantidade={item.quantidade}/>

          ))}
    </div>
  );
};







