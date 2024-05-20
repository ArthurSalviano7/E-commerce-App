import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos, getProduto} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiCartAdd} from "react-icons/bi";
import { adicionarProdutoAoCarrinho } from '../../api/CarrinhoServico';

export default function ProductCard({idProduto}) {
  const [imagem, setImagem] = useState(null);
  const [produto, setProduto] = useState({
      descricao: '',
      quantidade: '',
      valor: '',
      categoria: '',
      descricao: '',
      avaliacao: '',
      urlImagem: ''
  });

  const handleAddProduct = async (idProduto) => {
    try {
      const idComprador = localStorage.getItem('idComprador');
      const {data} = await adicionarProdutoAoCarrinho(idComprador, idProduto, 1);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    
    const fetchProduct = async () => {
        try {
            //Carregando e atualizando informações do produto com base no id
            const response = await getProduto(idProduto);
            const productData = response.data
            setProduto(productData)

            //Obter a imagem como um Blob:
            const imgResponse = await getImagemProduto(productData.urlImagem);

            // Criar uma URL Blob para a imagem
            const imageUrl = URL.createObjectURL(imgResponse);

            setImagem(imageUrl);
            console.log(imageUrl);
        } catch (error) {
          console.error(error);
        }
    };

    // Chamando a função para buscar os produtos
    fetchProduct();
  }, [idProduto]);


  // Renderiza o componente
  return (
    <div className="p-3">
              <div className="card border-0 rounded-0" style={{width: '12rem'}}>
                <div className='d-flex' style={{height: '100%'}}>
                  <img src={imagem} alt="Imagem do produto" className='card-img-top img-fluid' style={{ objectFit: 'cover', height: '100%', width: '100%' }}/>
                </div>

                <div className="card-body">
                    <div className='row'>
                        <div className='col-10'>
                            <h4 className="card-title">{produto.descricao}</h4>                                
                        </div>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col-4'>
                        <h5>R$ {produto.valor}</h5>
                    </div>
                    <div className='col-8'>
                        <button href='#' className='btn btn-dark text-warning p-3 w-100 rounded' onClick={() => handleAddProduct(produto.id)}>ADD TO CART  <BiCartAdd size={25}/></button>
                    </div>

                </div>
              </div>   
    </div>
  );
}








