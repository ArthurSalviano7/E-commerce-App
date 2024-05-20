import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import logoName from '../images/LogoName.png';
import cart from '../images/Cart.png';

import { useNavigate } from 'react-router-dom';


const Navbar = ({ searchText, setSearchText, handleSearch}) => {
    const navigate = useNavigate()

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    const handleHomeButton = () => {
        navigate("/"); 
        window.location.reload()
    }

    return (
        <nav className="navbar bg-dark d-inline-flex vw-100">
            <div className='container h-100'>
                <div className='justify-content-start'>
                    <span style={{cursor: 'pointer'}} onClick={() => handleHomeButton()}>
                    <img src={cart} width={80} />
                    <img src={logoName} height={40}/>
                    </span>
                </div>

                <div className="input-group w-50">
                    <form onSubmit={handleSubmit} className="d-flex w-100">
                        <input className="form-control me-2" type="text" value={searchText} placeholder="Search" aria-label="Search" onChange={handleSearchChange}/>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>

                <div className='justify-content-end'>
                <button className="btn" onClick={() => navigate("/cart")}>
                    <img src={cart} width={30} />
                </button>
                
                <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button> {/* Botão de login */}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;






