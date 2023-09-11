import { useEffect, useState } from "react";
import "./carrinho.css"

const TelaCarrinho = () => {
    const [carrinho, setCarrinho] = useState(null)

    const handleButtonClick = () => {
      window.location.replace('http://localhost:3000/pagamento');
    }

    const handleClickLixeira = (event) => {
      console.log(event.currentTarget.id) //Esse ID recebe o idProdutoCarrinho. 
      
      let produtoCarrinhoExcluir = carrinho.produtos.filter(p => p.idProdutoCarrinho === event.currentTarget.id)[0]

      let valorProduto = produtoCarrinhoExcluir.valor

      let novoProdutosCarrinho = carrinho.produtos.filter(p => p.idProdutoCarrinho !== event.currentTarget.id)
      let dado = {
        "produtos": novoProdutosCarrinho,
        "valorTotal": carrinho.valorTotal - valorProduto,
        "quantidade": carrinho.quantidade - 1,
        "id": carrinho.id
      }

      setCarrinho(dado)

      console.log(dado)
      fetch('http://localhost:8000/carrinho/1', {
         "method": "PUT",
         "body": JSON.stringify(dado),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })
    }

    useEffect(() => {
        fetch('http://localhost:8000/carrinho/1')
       .then(response => response.json())
       .then(json => setCarrinho(json))
    }, [])

    return (
      <>
        <div className="carrinho-container">
           {carrinho && carrinho.produtos.map(p => {
            return ( 
                <div key={p.idProdutoCarrinho} className="produto-container">
                    <div className="imagem-produto">
                        <img src={p.imagem} alt="Pizza" />
                    </div>
                    <div className="produto-info">
                        <h3>{p.nome}</h3>
                        <p>Valor: {p.valor}</p>
                    </div>
                    <div className="lixeira" onClick={handleClickLixeira} id={p.idProdutoCarrinho}>X</div>
                </div>
            )
           })}
        </div>
        <div>Valor Total: {carrinho && carrinho.valorTotal}</div>
        <div>Quantidade: {carrinho && carrinho.quantidade}</div>
        <button type="button" onClick={handleButtonClick}>Ir Para Pagamento</button>
      </>
    );
  }
  
  export default TelaCarrinho;