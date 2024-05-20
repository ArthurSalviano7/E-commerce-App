import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CartInfo({ cartItems }) {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calcularTotal = () => {
            let valorTotal = 0;
            for (let i = 0; i < cartItems.length; i++) {
                valorTotal += cartItems[i].produto.valor * cartItems[i].quantidade;
            }
            
            setTotal(valorTotal);
        };
    
        calcularTotal();
      }, [cartItems]);

    // Função para formatar o valor dos produtos, exemplo: R$ 10024.65  ==> R$ 10.024,65
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value);
    };

    return (
        <div className="w-25 card">
            <div className='card-body'>
                <h2>Valor Total</h2>
                <hr />
                <h4>{cartItems.length} produtos no carrinho</h4>
                <h3>{formatCurrency(total)}</h3>
            </div>

            <button className='btn btn-warning py-3'>Confirmar Compra</button>
            
        </div>
    );
};







