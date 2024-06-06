import React, { useState } from 'react';
import CartItem from './CartItem';

export default function Carrinho() {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        const itemExistente = carrinho.find((item) => item.id === produto.id);

        if (itemExistente) {
            const novoCarrinho = carrinho.map((item) =>
                item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
            );
            setCarrinho(novoCarrinho);
        } else {
            setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
        }
    };

    const removerDoCarrinho = (id) => {
        const novoCarrinho = carrinho.filter((item) => item.id !== id);
        setCarrinho(novoCarrinho);
    };

    const alterarQuantidade = (id, novaQuantidade) => {
        const novoCarrinho = carrinho.map((item) =>
            item.id === id ? { ...item, quantidade: novaQuantidade } : item
        );
        setCarrinho(novoCarrinho);
    };

    return (
        <div>
            {carrinho.map((item) => (
                <CartItem
                    key={item.id}
                    produto={item}
                    onRemoverProduto={removerDoCarrinho}
                    onAlterarQuantidade={alterarQuantidade}
                />
            ))}
        </div>
    );
}
