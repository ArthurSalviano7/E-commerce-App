import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProdutoForm from './components/ProdutoForm';
import Login from './components/Login';
import RegistroLoja from './components/RegistroLoja';
import RegistroComprador from './components/RegistroComprador';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registrar-loja' element={<RegistroLoja />}></Route>
        <Route path='/registrar-comprador' element={<RegistroComprador />}></Route>
      </Routes>
    </BrowserRouter>

    //<ProdutoForm />
    
  );
}

export default App;
