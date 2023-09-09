import { useEffect, useState } from "react"
import "./home.css"

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  const [carrinho, setCarrinho] = useState(null)
  
  const handleClickProduto = (event) => {
    let produtoId = parseInt(event.currentTarget.id);
    let valorPizza = produtos.filter(p => p.id === produtoId)[0].valor

    let novoValorTotal = carrinho.valorTotal + valorPizza;
    let novosProdutos = carrinho.produtos.push(produtoId)
    let novaQuantidade = carrinho.quantidade + 1;

    setCarrinho({
      "produtos": novosProdutos,
      "valorTotal": novoValorTotal,
      "quantidade": novaQuantidade
    })

    console.log(carrinho)
  }

    useEffect(() => {
      console.log("aaaaaaaaaaa")
      fetch('http://localhost:8000/produtos')
       .then(response => response.json())
       .then(json => setProdutos(json))

       fetch('http://localhost:8000/carrinho')
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