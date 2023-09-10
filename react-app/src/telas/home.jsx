import { useEffect, useState } from "react"
import uniqueId from 'lodash/uniqueId';
import "./home.css"

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  const [carrinho, setCarrinho] = useState(null)
  
  const handleClickProduto = (event) => {
    let produtoId = parseInt(event.currentTarget.id);

    let produtoAtual = produtos.filter(p => p.id === produtoId)[0]
    produtoAtual.idProdutoCarrinho = uniqueId()

    let valorPizza = produtoAtual.valor

    let novoProdutosCarrinho = carrinho.produtos != null ? [...carrinho.produtos, produtoAtual] : [produtoAtual]
    let novoValor = carrinho.valorTotal != null ? parseInt(carrinho.valorTotal) + parseInt(valorPizza) : valorPizza
    let novaQuantidade = carrinho.quantidade != null ? carrinho.quantidade + 1 : 1

    let novoCarrinho = {
      "produtos": novoProdutosCarrinho,
      "valorTotal": novoValor,
      "quantidade": novaQuantidade,
      "id": carrinho.id != null ? carrinho.id : 1
    }

    setCarrinho(novoCarrinho)

    //O carrinho do usuário vai passar a existir no momento do login, nesse momento se tem como premissa que o carrinho já existe
    fetch('http://localhost:8000/carrinho/1', {
         "method": "PUT",
         "body": JSON.stringify(novoCarrinho),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })

    alert("Produto adicionado ao carrinho")

    console.log(carrinho)
  }

    useEffect(() => {
      console.log("a")
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