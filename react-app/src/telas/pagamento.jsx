import { useEffect, useState } from "react";
import "./pagamento.css"; 

const TelaPagamento = () => {
  const [carrinho, setCarrinho] = useState(null);
  const [pagamento, setPagamento] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [formaPagamento, setFormaPagamento] = useState(""); // Estado para a forma de pagamento selecionada

  const handleOnSubmit = (event) => {
    event.preventDefault();

    let idCarrinho = carrinho.id;
    let valorPagamento = carrinho.valorTotal;

    setEndereco(event.target.endereco.value);

    let dadoPagamento = {
      idCarrinho: idCarrinho,
      valorPagamento: valorPagamento,
      formaPagamento: formaPagamento, // Usar o estado formaPagamento
    };

    fetch("http://localhost:8000/pagamento", {
      method: "POST",
      body: JSON.stringify(dadoPagamento),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setPagamento(json));
  };

  useEffect(() => {
    if (pagamento != null && endereco != null) {
      let dadoPedido = {
        idCarrinho: carrinho.id,
        idPagamento: pagamento.id,
        endereco: endereco,
      };

      fetch("http://localhost:8000/pedido", {
        method: "POST",
        body: JSON.stringify(dadoPedido),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      });
      window.location.replace("http://localhost:3000/pedido");
    }
  }, [pagamento]);

  useEffect(() => {
    fetch("http://localhost:8000/carrinho/1")
      .then((response) => response.json())
      .then((json) => setCarrinho(json));
  }, []);

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
              {carrinho && <span>R$ {carrinho.valorTotal.toFixed(2)}</span>}
            </div>
            <div className="item">
              <label>Quantidade do Pedido:</label>
              {carrinho && carrinho.quantidade}
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
