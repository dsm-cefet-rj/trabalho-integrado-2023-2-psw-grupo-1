import React, { useEffect, useState } from "react";
import "./pedido.css"; // Importe o arquivo CSS
import { useSelector } from "react-redux"

const TelaStatusPedido = () => {
    const pagamento = useSelector(state => state.pagamento);
    const pedido = useSelector(state => state.pedido)
    const carrinho = useSelector(state => state.carrinho)


    
    return (
        <>
            <div className="container">
                <div className="retangulo">
                    <h2>Status do Pedido</h2>
                    <div className="item">
                        <label>Valor Total do Pedido:</label>
                        <span>R$ {pagamento &&  pagamento.valorPagamento.toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <label>Quantidade de Itens no Carrinho:</label>
                        {carrinho && carrinho.quantidade}
                    </div>
                    <div className="item">
                        <label>Forma de Pagamento Realizada:</label>
                        {pagamento && pagamento.formaPagamento}
                    </div>
                    <div className="item">
                        <label>Endereço de Entrega:</label>
                        {pedido && pedido.localEntrega}
                    </div>
                    <div className="item">
                        <label>Pizzas Compradas:</label>
                        <ul>
                            {carrinho && carrinho.produtos ? (
                                carrinho.produtos.map((produto) => (
                                    <li key={produto.idProdutoCarrinho}>{produto.nome}</li>
                                ))
                            ) : (
                                <li>Nenhum produto encontrado</li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <label> Telefone de contato: </label> {pedido && pedido.numeroContato}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TelaStatusPedido;