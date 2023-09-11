import { useEffect, useState } from "react";

const TelaPagamento = () => {
    const [carrinho, setCarrinho] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/carrinho/1')
       .then(response => response.json())
       .then(json => setCarrinho(json))
    }, [])

    return (
      <>
        <div className="container-pagamento">
            <form>
                <label>Valor Total: {carrinho.valorTotal}</label>
                <label>Quantidade de itens: {carrinho.quantidade}</label>
                <div className="input">
                    <label>Endereco: </label>
                    <input type="text" />
                </div>
            </form>
        </div>
      </>
    );
  }
  
  export default TelaPagamento;