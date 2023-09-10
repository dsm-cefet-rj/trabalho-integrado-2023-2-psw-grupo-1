import { useEffect, useState } from "react"
import "./home.css"

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  const [carrinho, setCarrinho] = useState(null)
  
  const handleClickProduto = (event) => {
    let produtoId = parseInt(event.currentTarget.id);

    let produtoAtual = produtos.filter(p => p.id === produtoId)[0]

    let valorPizza = produtoAtual.valor

    let novoProdutosCarrinho = [...carrinho.produtos, produtoAtual]
    let novoValor = parseInt(carrinho.valorTotal) + parseInt(valorPizza)
    let novaQuantidade = carrinho.quantidade + 1

    setCarrinho({
      "produtos": novoProdutosCarrinho,
      "valorTotal": novoValor,
      "quantidade": novaQuantidade,
      "id": carrinho.id
    })

    fetch('http://localhost:8000/carrinho/1', {
         "method": "PUT",
         "body": JSON.stringify(carrinho),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })

    console.log(carrinho)
  }

    useEffect(() => {
      fetch('http://localhost:8000/produtos')
       .then(response => response.json())
       .then(json => setProdutos(json))
       
       //Mais pra frente aqui ao invés de chamar 1 direto ele vai chamar o id do usuário
       fetch('http://localhost:8000/carrinho/1')
       .then(response => response.json())
       .then(json => setCarrinho(json))
     }, [])

  return (
    <>
      <div className="produtos-container">
        {produtos && produtos.map(p => {
          return<div key={p.id} className="produto" onClick={handleClickProduto} id={p.id}>
                  <div className="imagem-produto">
                    <img src={p.imagem} alt="Pizza" />
                  </div>
                  <h2 name="nome">{p.nome}</h2>
                  <p name="valor">Valor: R${p.valor}</p>
                </div>
        })}
      </div>
    </>
  );
}

export default TelaHome;