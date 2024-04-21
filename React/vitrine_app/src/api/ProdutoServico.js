import axios from 'axios';

const API_URL = 'http://localhost:8080/produtos';

export async function salvarProduto(produto){
    return await axios.post(`${API_URL}/cadastrar`, produto);
}

export async function getProdutos(size = 10){
    return await axios.get(`${API_URL}?size=${size}`);
}

export async function getProduto(id){
    return await axios.get(`${API_URL}/usar/${id}`);
}

export async function alterarProduto(produto){
    return await axios.post(API_URL, produto);
}

export async function updateImagem(formData){
    return await axios.put(`${API_URL}/upload`, formData);
}

export async function deletarProduto(id){
    return await axios.delete(`${API_URL}/${id}`);
}





