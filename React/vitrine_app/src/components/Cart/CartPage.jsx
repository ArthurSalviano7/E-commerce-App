import React, { useEffect, useState } from 'react';
import { listarProdutosDoCarrinho } from '../../api/CarrinhoServico';
import Navbar from '../../components/Navbar';
import CartInfo from './CartInfo';
import CartProductList from './CartProductList';
import { searchProduct } from '../Product/searchProductService';

export default function CartPage() {
    const [produtos, setProdutos] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const idComprador = localStorage.getItem('idComprador');
                const response = await listarProdutosDoCarrinho(idComprador);
                setProdutos(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearch = () => {
        const fetchFilteredProducts = async () => {
            try {
                const idComprador = localStorage.getItem('idComprador');
                const response = await listarProdutosDoCarrinho(idComprador);
                const filteredProducts = searchProduct(response.data, searchText);
                setProdutos(filteredProducts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFilteredProducts();
    };

    const updateCart = (updatedItems) => {
        setProdutos(updatedItems);
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <Navbar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
            <div className='d-flex flex-row vh-100 py-3'>
                <CartProductList cartItems={produtos} updateCart={updateCart} />
                <CartInfo cartItems={produtos} />
            </div>
        </div>
    );
}














