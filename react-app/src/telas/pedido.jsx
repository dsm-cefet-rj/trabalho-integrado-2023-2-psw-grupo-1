import "./pagamento.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { alteraStatus } from "../redux/pedidoSlice";

const TelaStatusPedido = () => {
    const pagamento = useSelector(state => state.pagamento);
    const pedido = useSelector(state => state.pedido)
    const carrinho = useSelector(state => state.carrinho)
    const [contadorStatus, setContadorStatus] = useState(0)
    const dispatch = useDispatch()

    const listaStatus = ["Em Preparo", "Pedido Enviado", "Pedido Entregue"]
    
    const pararMudancaStatus = () => clearTimeout(timerStatus)

    const timerStatus = setTimeout(() => {
        if (contadorStatus > listaStatus.length - 1) {
            pararMudancaStatus()
            return
        }
        dispatch(alteraStatus({
            ...pedido,
            "statusPedido": listaStatus[contadorStatus]
        }))
        setContadorStatus(contadorStatus + 1)
    }, 5000)
    
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
                        <label>Status Pedido: {pedido && pedido.statusPedido}</label>
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