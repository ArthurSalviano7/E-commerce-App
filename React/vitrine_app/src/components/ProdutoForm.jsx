import React, { useRef, useState } from "react";
import { salvarProduto, updateImagem } from "../api/ProdutoServico";

export default function ProdutoForm() {
    
    const fileRef = useRef();
    const [imagem, setImagem] = useState(undefined);
    const [values, setValues] = useState({
        descricao: '',
        quantidade: '',
        valor: '',
        categoria: '',
        descricao: '',
    });

    //Automaticamente atualizar informações do produto ao mudar valores
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
        console.log(values);
    };

    const handleNovoProduto = async (event) => {
        try{
            const {data} = await salvarProduto(values);
            const formData = new FormData();
            formData.append('file', imagem);
            formData.append('id', data.id);
            const {data: urlImagem} = await updateImagem(formData)
            
            setImagem(undefined);
            fileRef.current.value = null //reseta o arquivo de imagem após cadastro
        }catch(error){
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleNovoProduto}>
                <div>
                    <span>Descrição:</span>
                    <input type="text" name='descricao' value={values.name} onChange={onChange} required/>
                </div>
                <div>
                    <span>Quantidade:</span>
                    <input type="number" name='quantidade' value={values.name} onChange={onChange} required/>
                </div>
                <div>
                    <span>Valor:</span>
                    <input type="text" name='valor' value={values.name} onChange={onChange} pattern="[0-9]+([.][0-9]+)?" required/>
                </div>
                <div>
                    <span>Categoria:</span>
                    <input type="text" name='categoria' value={values.name} onChange={onChange} required/>
                </div>
                <div>
                    <span>Imagem:</span>
                    <input type="file" name='imagem' ref={fileRef} onChange={(event) => setImagem(event.target.files[0])}/>
                </div>
                <div>
                    <button type="submit">Realizar Cadastro</button>
                </div>
            </form>
        
        </div>
    );
}