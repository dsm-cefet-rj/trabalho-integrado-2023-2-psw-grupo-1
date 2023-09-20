import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import uniqueId from 'lodash/uniqueId';
import "./home.css"
import { changeCarrinho } from "../redux/carrinhoSlice";

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  const [displayPopUp, setDisplayPopUp] = useState("none")
  const [isBlur, setIsBlur] = useState(false)
  const dispatch = useDispatch()
  const  carrinho2  = useSelector(state => state.carrinho)

  const handleClickConfirmarProduto = (event) => {
    let produtoId = parseInt(event.currentTarget.id);

    let produtoAtual = produtos.filter(p => p.id === produtoId)[0]

    produtoAtual.idProdutoCarrinho = parseInt(uniqueId())

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

    //O carrinho do usuário vai passar a existir no momento do login, nesse momento seem como premissa que o carrinho já existe
    fetch('http://localhost:8000/carrinho/1', {
         "method": "PUT",
         "body": JSON.stringify(carrinho2),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })

    alert("Produto adicionado ao carrinho")
  }
  
  const handleClickProduto = (event) => {
    setDisplayPopUp("block")
    setIsBlur(true)
  }

    useEffect(() => {
      fetch('http://localhost:8000/produtos')
       .then(response => response.json())
       .then(json => setProdutos(json))
     }, [])

  return (
    <>
      <div className="pop-pup-pizza-container" style={{display: displayPopUp}}>
        <div className="pop-up-pizza"> 
          <div className="pop-up-campos">
            <h2>Nome Pizza</h2>
            <p>Descricao: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut reiciendis excepturi praesentium ipsam impedit earum deleniti eligendi, quo, nobis at vel itaque voluptates totam aperiam! Voluptatum necessitatibus illo dolores.</p>
            <div>Valor: </div>
            <div className="botoes">
              <button type="button" onClick={handleClickConfirmarProduto}>Adicionar ao Carrinho</button>
              <button type="button" >Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`produtos-container ${isBlur === true && "blur"}`}>
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