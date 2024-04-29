import React, { useRef, useState } from "react";
import { login, register} from "../api/AuthServico";
import { salvarComprador} from "../api/CompradorServico";

export default function RegistroComprador() {
    
    //Informações para o cadastro da loja
    const [values, setValues] = useState({
        nome: '',
        endereco: '',
        telefone: '',
        cpf: '',
    });

    const [userValues, setUserValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    //Automaticamente atualizar informações do usuario ao mudar valores
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
        setUserValues({...userValues, [event.target.name]: event.target.value});
        console.log(values);
        console.log(userValues);
    };

    const handleRegister = async (event) => {
        event.preventDefault(); // Evitar o comportamento padrão do formulário
        try{
            const newUserValues = { ...userValues, name: values.nome }; //Atualizando campo "name" do userValues para o nome do Comprador
            setUserValues(newUserValues);

            const { data, status } = await register(newUserValues);
            console.log(data);

            // Verificar se a requisição foi bem-sucedida (código de status 2xx)
            if (status >= 200 && status < 300) {
                // Chamar o método para salvar o Comprador
                const {data} = await salvarComprador(values);
                console.log(data);
            } else {
                console.error("Erro ao registrar usuário:", data.message);
            }
        }catch(error){
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div>
                    <span>Nome:</span>
                    <input type="text" name='nome' value={values.nome} onChange={onChange} required/>
                </div>
                <div>
                    <span>Endereço de entrega:</span>
                    <input type="text" name='endereco' value={values.endereco} onChange={onChange} required/>
                </div>
                <div>
                    <span>CPF:</span>
                    <input type="text" name='cpf' value={values.cpf} onChange={onChange} required/>
                </div>
                <div>
                    <span>Telefone:</span>
                    <input type="text" name='telefone' value={values.telefone} onChange={onChange} required/>
                </div> 
                <div>
                    <span>Email:</span>
                    <input type="text" name='email' value={userValues.email} onChange={onChange} required/>
                </div>
                <div>
                    <span>Senha:</span>
                    <input type="password" name='password' value={userValues.password} onChange={onChange} required/>
                </div>
            
                <div>
                    <button type="submit">Cadastrar Conta</button>
                </div>
            </form>
        
        </div>
    );
}