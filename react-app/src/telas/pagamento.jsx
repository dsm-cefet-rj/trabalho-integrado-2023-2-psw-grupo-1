import { useEffect, useState } from "react";

const TelaPagamento = () => {
    const [carrinho, setCarrinho] = useState(null)
    const [pagamento, setPagamento] = useState(null)
    const [endereco, setEndereco] = useState(null)

    const handleOnSubmit = (event) => {
      event.preventDefault();

      let idCarrinho = carrinho.id
      let valorPagamento = carrinho.valorTotal
      let formaPagamento = event.target.formaPagamento.value

      setEndereco(event.target.endereco.value)

      let dadoPagamento = {
        "idCarrinho": idCarrinho,
        "valorPagamento": valorPagamento,
        "formaPagamento": formaPagamento
      }

      fetch('http://localhost:8000/pagamento', {
        "method": "POST",
        "body": JSON.stringify(dadoPagamento),
        "headers": {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => setPagamento(json))
    }

    useEffect(() => {
      if(pagamento != null && endereco != null) {
        let dadoPedido = {
          "idCarrinho": carrinho.id,
          "idPagamento": pagamento.id,
          "endereco": endereco
        }
  
        fetch('http://localhost:8000/pedido', {
          "method": "POST",
          "body": JSON.stringify(dadoPedido),
          "headers": {"Content-type": "application/json;charset=UTF-8"}
        })
        window.location.replace('http://localhost:3000/pedido');
      }
    }, [pagamento])

    useEffect(() => {
        fetch('http://localhost:8000/carrinho/1')
       .then(response => response.json())
       .then(json => setCarrinho(json))
    }, [])

    return (
      <>
        <div className="container-pagamento">
            <form onSubmit={handleOnSubmit}>
                <label>Valor Total: {carrinho && carrinho.valorTotal}</label>
                <label>Quantidade de itens: {carrinho && carrinho.quantidade}</label>
                <div className="input">
                    <label>Endereco: </label>
                    <input type="text" name="endereco" id="endereco"/>
                </div>
                <div className="input">
                  <label>Forma Pagamento: </label>
                  <input type="text" name="formaPagamento" id="formaPagamento" />
                </div>
                <input type="submit" value="Pagar"/>
            </form>
        </div>
      </>
    );
  }
  
  export default TelaPagamento;