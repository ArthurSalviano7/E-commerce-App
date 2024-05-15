import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import logoName from '../images/LogoName.png';
import cart from '../images/Cart.png';

export default function Home() {
                   
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  return (
    <nav className="navbar bg-dark d-inline-flex vw-100">
        <div className='container h-100'>
            <div className='justify-content-start'>
                <img src={cart} width={80} />
                <img src={logoName} height={40}/>
            </div>

            <div className="input-group w-50">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">Search</button>
            </div>

            <div className='justify-content-end'>
            <button className="btn">
                <img src={cart} width={30} />
            </button>
            <button className="btn btn-primary">Login</button> {/* Botão de login */}
            </div>
        </div>
    </nav>
  );
}






