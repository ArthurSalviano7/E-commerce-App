import React, { useEffect, useState } from 'react';
import { getImagemProduto, getProduto, removerProdutoDoCarrinho, alterarQuantidadeProdutoNoCarrinho } from "../../api/ProdutoServico";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function CartItem({ idProduto, quantidade, onRemoverProduto, onAlterarQuantidade }) {
    const [imagem, setImagem] = useState(null);
    const [produto, setProduto] = useState({
        descricao: '',
        quantidade: '',
        valor: '',
        categoria: '',
        avaliacao: '',
        urlImagem: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProduto(idProduto);
                const productData = response.data;
                setProduto(productData);

                const imgResponse = await getImagemProduto(productData.urlImagem);
                const imageUrl = URL.createObjectURL(imgResponse);
                setImagem(imageUrl);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [idProduto]);

    const handleRemoveClick = async () => {
        try {
            await removerProdutoDoCarrinho(idProduto);
            onRemoverProduto(idProduto);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddClick = async () => {
        try {
            await alterarQuantidadeProdutoNoCarrinho(idProduto, quantidade + 1);
            onAlterarQuantidade(idProduto, quantidade + 1);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubtractClick = async () => {
        if (quantidade > 1) {
            try {
                await alterarQuantidadeProdutoNoCarrinho(idProduto, quantidade - 1);
                onAlterarQuantidade(idProduto, quantidade - 1);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="p-3">
            <div className="border-0 rounded-0 d-flex align-items-center" style={{ width: '100%' }}>
                <div className='d-flex' style={{ height: '100px', width: '20%' }}>
                    <img src={imagem} alt="Imagem do produto" className='' style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                </div>

                <div className='ms-3'>
                    <h4 className="">{produto.descricao}</h4>
                    <h5>R$ {produto.valor}</h5>
                </div>

                <div className='ms-auto d-flex align-items-center'>
                    <button className='btn btn-light p-1 me-1' onClick={handleSubtractClick}><AiOutlineMinus /></button>
                    <h5 className='m-0'>{quantidade}</h5>
                    <button className='btn btn-light p-1 ms-1' onClick={handleAddClick}><AiOutlinePlus /></button>
                </div>

                <div className='ms-auto d-flex align-items-center'>
                    <button onClick={handleRemoveClick} className='btn text-warning p-1 rounded'><RiDeleteBin5Line /></button>
                </div>
            </div>
        </div>
    );
}










