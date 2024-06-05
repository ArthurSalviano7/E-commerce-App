import React, { useEffect, useState} from 'react';
import {getImagemProduto, listarProdutos, getStoreProducts} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar';
import { searchProduct } from '../Product/searchProductService';
import { useNavigate } from 'react-router-dom';
import StoreProductsList from './StoreProductsList';
import RegisterProduct from './RegisterProduct';
import { getLoja } from '../../api/LojaServico';


//Página para gestão de estoque da loja (cadastrar, alterar e excluir produtos)
export default function StorePage() {
  const [store, setStore] = useState([])
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await getStoreProducts("39bcaebc-f55c-4ce2-ba15-2a528c3cfdac"); // Carrega todos os produtos da Loja
        setProducts(response.data);
        console.log(response.data);
        response = await getLoja("39bcaebc-f55c-4ce2-ba15-2a528c3cfdac") // Carrega informações da Loja
        setStore(response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    
    const results = searchProduct(products, searchText);
    setProducts(results);

    navigate('/', { state: { searchText } });
};

    
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}  />
      <h1 className='p-3'>Gestão de Estoque</h1>
      <h2 className='px-3'>Nome: {store.nome}</h2>
      <h2 className='px-3'>Avaliação: {store.avaliacao==null ? "Sem avaliação" : store.avaliacao}</h2>
      <RegisterProduct idLoja={store.id}/>
      <StoreProductsList storeProducts={products}/>
      
    </div>
  );
}






