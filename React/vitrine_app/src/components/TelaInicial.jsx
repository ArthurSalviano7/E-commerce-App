import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos} from "../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TelaInicial() {
                   
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchProdutos = async () => {
      try {
        
        const response = await listarProdutos();
         const produtosComImagens = await Promise.all(response.data.map(async produto => {
          const imagem = await getImagemProduto(produto.id);
          return {...produto, imagem};
        }));
        // Atualizando o estado 'produtos' com os produtos e suas imagens
        setProdutos(produtosComImagens);
        // Atualizando o estado 'isLoading' para false
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    // Chamando a função para buscar os produtos
    fetchProdutos();
  }, []);

  // Se 'isLoading' for true, retorna um elemento de carregamento
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  // Renderiza o componente
  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center my-3">
        <button className="btn btn-primary">Login</button> {/* Botão de login */}
        <input type="text" className="form-control" placeholder="Pesquisar..." />
        <button className="btn btn-primary">Carrinho de Compras</button>
      </header>
      <main>
        <div className="row">
          {/* Mapeia os primeiros produtos e retorna um elemento */}
          {produtos.slice(0, 3).map((produto) => (
            <div key={produto.id} className="col-md-4">
              <div className="card mb-4">
                <img src={produto.imagem} alt={produto.nome} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{produto.nome}</h5>
                  <p className="card-text">{produto.descricao}</p>
                  <p>Categoria: {produto.categoria}</p>
                  <p>Avaliação: {produto.avaliacao}</p>
                  <p>Quantidade: {produto.quantidade}</p>
                  <p>Valor: {produto.valor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}






