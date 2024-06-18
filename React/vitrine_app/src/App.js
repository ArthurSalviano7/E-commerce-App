import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Authentication/Login';
import RegistroLoja from './components/Authentication/RegistroLoja';
import RegistroComprador from './components/Authentication/RegistroComprador';
import CartPage from './components/Cart/CartPage';
import StorePage from './components/Store/StorePage';
import RegisterProduct from './components/Store/RegisterProduct';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route> 
        {/* <Route path='/produto-cadastrar' element={<ProdutoForm/>}></Route> */}
        <Route path='/registrar-loja' element={<RegistroLoja />}></Route>
        <Route path='/registrar-comprador' element={<RegistroComprador />}></Route>  
       
        <Route path='/registrar-Produto' element={<registerProduct/>}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/store' element={<StorePage />}></Route>

      </Routes>
    </BrowserRouter>

    
    //<ProdutoForm />
    
  );
}

export default App;
