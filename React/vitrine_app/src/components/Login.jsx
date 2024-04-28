import React, { useRef, useState } from "react";
import { login, register} from "../api/AuthServico";

export default function Login() {
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    //Automaticamente atualizar informações do usuario ao mudar valores
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
        console.log(values);
    };

    const handleLogin = async (event) => {
        event.preventDefault(); // Evitar o comportamento padrão do formulário
        try{
            const {data} = await login(values);
            console.log(data);
        }catch(error){
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <span>Email:</span>
                    <input type="text" name='email' value={values.email} onChange={onChange} required/>
                </div>
                <div>
                    <span>Senha:</span>
                    <input type="password" name='password' value={values.password} onChange={onChange} required/>
                </div>
            
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        
        </div>
    );
}