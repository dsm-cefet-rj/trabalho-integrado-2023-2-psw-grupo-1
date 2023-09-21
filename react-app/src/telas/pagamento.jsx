import { useEffect, useState } from "react";
import "./pagamento.css"; // Importe o arquivo CSS
import { useDispatch, useSelector } from "react-redux"
import { changePagamento } from "../redux/pagamentoSlice";
import { useNavigate } from "react-router-dom";
import { changePedido } from "../redux/pedidoSlice";

const TelaPagamento = () => {
  const [endereco, setEndereco] = useState(null);
  const [formaPagamento, setFormaPagamento] = useState(""); // Estado para a forma de pagamento selecionada
  const carrinho2 = useSelector(state => state.carrinho)
  const pedido = useSelector(state => state.pedido)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOnSubmit = (event) => {
    event.preventDefault();

    let idCarrinho = carrinho2.id;
    let valorPagamento = carrinho2.valorTotal;

    setEndereco(event.target.endereco.value);

    let dadoPagamento = {
      idCarrinho: idCarrinho,
      valorPagamento: valorPagamento,
      formaPagamento: formaPagamento, // Usar o estado formaPagamento
    };

    let dadoPedido = {
      "idProdutoCarrinho": carrinho2.idProdutoCarrinho,
      "localEntrega": event.target.endereco.value
    }

    dispatch(changePedido(dadoPedido))
    dispatch(changePagamento(dadoPagamento))

    fetch("http://localhost:8000/pagamento", {
      method: "POST",
      body: JSON.stringify(dadoPagamento),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })

    fetch("http://localhost:8000/pedido", {
      method: "POST",
      body: JSON.stringify(pedido),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

      navigate("../pedido")
  };
  // Função para atualizar o estado formaPagamento quando uma opção é selecionada
  const handleFormaPagamentoChange = (event) => {
    setFormaPagamento(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="retangulo">
          <form onSubmit={handleOnSubmit}>
            <div className="item">
              <label>Valor Total:</label>
              {carrinho2 && <span>R$ {carrinho2.valorTotal.toFixed(2)}</span>}
            </div>
            <div className="item">
              <label>Quantidade do Pedido:</label>
              {carrinho2 && carrinho2.quantidade}
            </div>
            <div className="item">
              <label>Endereço:</label>
              <input type="text" name="endereco" id="endereco" />
            </div>
            <div className="item">
              <label>Forma de Pagamento:</label>
              <div className="forma-pagamento">
                <label>
                  <input
                    type="radio"
                    name="formaPagamento"
                    value="Credito"
                    onChange={handleFormaPagamentoChange}
                    checked={formaPagamento === "Credito"}
                  />
                  Crédito
                </label>
                <label>
                  <input
                    type="radio"
                    name="formaPagamento"
                    value="Débito"
                    onChange={handleFormaPagamentoChange}
                    checked={formaPagamento === "Débito"}
                  />
                  Débito
                </label>
                <label>
                  <input
                    type="radio"
                    name="formaPagamento"
                    value="Pix"
                    onChange={handleFormaPagamentoChange}
                    checked={formaPagamento === "Pix"}
                  />
                  Pix
                </label>
                <label>
                  <input
                    type="radio"
                    name="formaPagamento"
                    value="Vale Alimentação"
                    onChange={handleFormaPagamentoChange}
                    checked={formaPagamento === "Vale Alimentação"}
                  />
                  Vale Alimentação
                </label>
              </div>
            </div>
            <input type="submit" value="Pagar" />
          </form>
        </div>
      </div>
    </>
  );
};

export default TelaPagamento;
