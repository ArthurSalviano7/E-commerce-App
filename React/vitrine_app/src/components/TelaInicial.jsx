import React, { useEffect, useState } from 'react';
import {getImagemProduto, getProdutos} from "../api/ProdutoServico";


export default function TelaInicial() {
                   
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    
    const fetchProdutos = async () => {
      try {
        
        const response = await getProdutos();
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
    <div className="inicial">
      <header className="inicial-header">
        <button>Login</button> {/* Botão de login */}
        <input type="text" placeholder="Pesquisar..." />
        <button>Carrinho de Compras</button>
      </header>
      <main>
        {/* Mapeia os primeiros produtos e retorna um elemento */}
        {produtos.slice(0, 3).map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.imagem} alt={produto.nome} />
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Categoria: {produto.categoria}</p>
            <p>Avaliação: {produto.avaliacao}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <p>Valor: {produto.valor}</p>
          </div>
        ))}
      </main>
    </div>
  );
}





