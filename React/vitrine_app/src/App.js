import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProdutoForm from './components/ProdutoForm';
import Home from './components/Home';
import Login from './components/Authentication/Login';
import RegistroLoja from './components/Authentication/RegistroLoja';
import RegistroComprador from './components/Authentication/RegistroComprador';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route> 
        <Route path='/produto-cadastrar' element={<ProdutoForm/>}></Route>
        <Route path='/registrar-loja' element={<RegistroLoja />}></Route>
        <Route path='/registrar-comprador' element={<RegistroComprador />}></Route>
      </Routes>
    </BrowserRouter>

    //<ProdutoForm />
    
  );
}

export default App;
