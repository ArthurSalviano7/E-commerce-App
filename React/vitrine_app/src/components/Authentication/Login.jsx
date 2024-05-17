import React, { useRef, useState } from "react";
import { login, register} from "../../api/AuthServico";

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
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className="40-w p-5 rounded bg-white">
                <form onSubmit={handleLogin}>
                    <h3 className="text-center">Login</h3>
                    <div className="mb-2">
                        <label className="p-2">Email:</label>
                        <input type="text" name='email' value={values.email} onChange={onChange} placeholder="Insira o email" className="form-login" required/>
                    </div>
                    <div className="mb-2">
                        <label className="p-1">Senha:</label>
                        <input type="password" name='password' value={values.password} onChange={onChange} placeholder="Insira a senha" className="form-login" required/>
                    </div>
                
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}