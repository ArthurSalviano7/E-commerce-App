import React, { useState } from "react";
import { login } from "../../api/AuthServico";
import { useNavigate } from "react-router-dom";
import './styles/Login.css'; // Importa o arquivo CSS para estilisação

export default function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values);
    };

    const handleLogin = async (event) => {
        event.preventDefault(); // Evitar o comportamento padrão do formulário
        try {
            const { data } = await login(values);
            console.log(data);
            navigate("/"); // Leva para página principal após o Login
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center login-container">
            <div className="login-form-container p-5 rounded">
                <form onSubmit={handleLogin} className="w-100">
                    <h3 className="text-center mb-4">Fazer login</h3>
                    <div className="mb-3">
                        <input type="email" name='email' value={values.email} onChange={onChange} placeholder="E-mail" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' value={values.password} onChange={onChange} placeholder="Senha" className="form-control" required />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg btn-custom">Continuar</button>
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-muted">Você ainda não tem conta?</span> <a href="/registrar-comprador" className="text-primary">Criar conta</a> ou
                        <br />
                        <a href="/registrar-loja" className="text-primary">Registrar minha loja</a>
                    </div>
                </form>
              </div>
         </div>
     );
}
