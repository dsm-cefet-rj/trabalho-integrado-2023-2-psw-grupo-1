import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import uniqueId from 'lodash/uniqueId';
import "./home.css"
import { changeCarrinho } from "../redux/carrinhoSlice";

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  const dispatch = useDispatch()
  const  carrinho2  = useSelector(state => state.carrinho)
  
  const handleClickProduto = (event) => {
    let produtoId = parseInt(event.currentTarget.id);

    let produtoAtual = produtos.filter(p => p.id === produtoId)[0]
    produtoAtual.idProdutoCarrinho = parseInt(uniqueId())

    console.log(produtoAtual.idProdutoCarrinho)

    let valorPizza = produtoAtual.valor

    let novoProdutosCarrinho = carrinho2.produtos != null ? [...carrinho2.produtos, produtoAtual] : [produtoAtual]
    let novoValor = carrinho2.valorTotal != null ? parseInt(carrinho2.valorTotal) + parseInt(valorPizza) : valorPizza
    let novaQuantidade = carrinho2.quantidade != null ? carrinho2.quantidade + 1 : 1

    let novoCarrinho = {
      "produtos": produtoAtual,
      "valorTotal": novoValor,
      "quantidade": novaQuantidade,
      "id": carrinho2.id != null ? carrinho2.id : 1
    }

    dispatch(changeCarrinho(novoCarrinho))

    //O carrinho do usuário vai passar a existir no momento do login, nesse momento se tem como premissa que o carrinho já existe
    fetch('http://localhost:8000/carrinho/1', {
         "method": "PUT",
         "body": JSON.stringify(novoCarrinho),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })

    alert("Produto adicionado ao carrinho")

    console.log(carrinho2)
  }

    useEffect(() => {
      console.log("a")
      fetch('http://localhost:8000/produtos')
       .then(response => response.json())
       .then(json => setProdutos(json))
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