import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import ProductCard from './Product/ProductCard';
import ProductList from './Product/ProductList';


export default function Home() {
                   
  return (
    <div>
      <Navbar />
      <ProductList />
    </div> 
  );
}






