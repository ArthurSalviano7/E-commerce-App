import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/Navbar';
import CartInfo from './CartInfo';
import CartProductList from './CartProductList';
import { searchProduct } from '../Product/searchProductService';
import { listarProdutosDoCarrinho } from '../../api/CarrinhoServico';


export default function CartPage() {
  const [produtos, setProdutos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const idComprador = localStorage.getItem('idComprador');
        const response = await listarProdutosDoCarrinho(idComprador);
        setProdutos(response.data); // Inicialmente, mostra todos os produtos
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  //Atualiza a lista de produtos com os produtos filtrados pela busca
  const handleSearch = () => {
    
    const results = searchProduct(produtos, searchText);
    setProdutos(results);
    };

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      
      <div className='d-flex flex-row vh-100 py-3'>
        <CartProductList cartItems = {produtos} />
        <CartInfo cartItems = {produtos}/>
      </div>
    </div>
  );
}






