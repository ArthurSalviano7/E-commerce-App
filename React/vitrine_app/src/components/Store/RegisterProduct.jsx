import React, { useRef, useState } from "react";
import { salvarProduto, updateImagem } from "../../api/ProdutoServico";

export default function RegisterProduct({ idLoja }) {
    
    const fileRef = useRef();
    const [imagem, setImagem] = useState(undefined);
    const [imagemURL, setImagemURL] = useState(undefined);
    const [values, setValues] = useState({
        descricao: '',
        quantidade: '',
        valor: '',
        categoria: '',
        descricao: '',
        idLoja: '' 
    });

    //Automaticamente atualizar informações do produto ao mudar valores
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value, idLoja: idLoja});
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
            setImagemURL(undefined);
            fileRef.current.value = null //reseta o arquivo de imagem após cadastro
        }catch(error){
            console.log(error)
        }
    };

    return (
        
        <div className="card p-3 m-3 w-90">
            <h3>Cadastrar Produto:</h3>
            <form onSubmit={handleNovoProduto} className="d-flex flex-wrap p-3">
                <div className="d-inline-flex w-100 p-2 gap-4">
                    <div>
                        <input type="text" name='descricao' placeholder='Insira a descrição' value={values.name} onChange={onChange} required/>
                    </div>
                    <div>
                        <input type="number" name='quantidade' placeholder='Quantidade' value={values.name} onChange={onChange} required/>
                    </div>
                </div>

                <div className="d-inline-flex w-100 p-2 gap-4">
                    <div>
                        <input type="text" name='valor' placeholder='Valor (R$)' value={values.name} onChange={onChange} pattern="[0-9]+([.][0-9]+)?" required/>
                    </div>
                    <div>
                        <input type="text" name='categoria' placeholder='Categoria' value={values.name} onChange={onChange} required/>
                    </div>
                </div>

                <div className="w-100 p-2">
                    <input type="file" name='imagem' placeholder="Escolher Imagem" className="w-100" ref={fileRef} onChange={(event) => {setImagem(event.target.files[0]); setImagemURL(URL.createObjectURL(event.target.files[0]))}}/>
                    {imagemURL && <img src={imagemURL} alt="Imagem selecionada" style={{maxWidth: '10%', height: 'auto', paddingTop: '5px'}} />}
                </div>
                <div className="p-2">
                    <button type="submit" className="btn btn-success">Realizar Cadastro</button>
                </div>
            </form>
        
        </div>
    );
}