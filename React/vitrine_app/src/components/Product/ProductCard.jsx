import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos, getProduto} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiCartAdd} from "react-icons/bi";

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
    <div className="container p-5">
              <div className="card border-0 rounded-0" style={{maxWidth: '15rem', maxHeight: '18rem'}}>
                <img src={imagem} alt="Imagem do produto" className='card-img-top'/>
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
                        <a href='#' className='btn btn-dark text-warning p-3 w-100 rounded'>ADD TO CART  <BiCartAdd size={25}/></a>
                    </div>

                </div>
              </div>   
    </div>
  );
}






