import React, { useEffect, useState } from 'react';
import {getImagemProduto, listarProdutos, getProduto} from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


export default function StoreItem({ idProduto }) {

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

    // Chamando a função para buscar o produto
    fetchProduct();
  }, [idProduto]);


  // Renderiza o componente
  return (
    <div className="p-3">
        <div className="border-0 rounded-0 d-flex" style={{width: '100%'}}>
            <div className='d-flex' style={{ width: '10%', height: '100px', overflow: 'hidden' }}>
                <img src={imagem} alt="Imagem do produto" className='' style={{ objectFit: 'contain', height: '100%', width: '100%' }}/>
            </div>

            
            <div className='align-self-start h-25'>
                <div className=''>
                    <h4 className="">{produto.descricao}</h4>                                
                </div>

                <div className=''>
                <h5>R$ {produto.valor}</h5>
                </div>
            </div>
              
            <div className='ms-auto d-flex align-items-center'>
                <button className='btn btn-light p-1 me-1'><AiOutlineMinus /></button>
                <h5 className='m-0'>{produto.quantidade}</h5>
                <button className='btn btn-light p-1 ms-1'><AiOutlinePlus /></button>
            </div>

            <div className='ms-auto d-flex align-items-center'>
                <div className=''>
                    <button className='btn text-warning p-1 w-100 rounded'><RiDeleteBin5Line /></button>
                </div>
            </div>
        </div>   
    </div>
  );
}








