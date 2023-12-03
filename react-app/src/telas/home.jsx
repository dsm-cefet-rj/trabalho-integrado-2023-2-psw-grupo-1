import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeCarrinho, fetcha } from "../redux/carrinhoSlice";
import { iniciaProduto } from "../redux/produtosSlice";
import uniqueId from 'lodash/uniqueId';
import "./home.css"

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  const [displayPopUp, setDisplayPopUp] = useState("none")
  const [blurValue, setBlurValue] = useState("none")
  const [produtoPopUp, setProdutoPopUp] = useState(null)
  const [carrinhoMudou, setCarrinhoMudou] = useState(0)
  const dispatch = useDispatch()
  const  carrinho2  = useSelector(state => state.carrinho)

  const handleClickConfirmarProduto = async (event) => {
    let produtoId = (event.currentTarget.id);
    let produtoAtual = produtos.filter(p => p.id === produtoId)[0]

    let valorPizza = produtoAtual.valor
    //let novoProdutosCarrinho = carrinho2.produtos != null ? [...carrinho2.produtos, produtoAtual] : [produtoAtual]
    let novoValor = carrinho2.valorTotal != null ? parseInt(carrinho2.valorTotal) + parseInt(valorPizza) : valorPizza
    let novaQuantidade = carrinho2.quantidade != null ? carrinho2.quantidade + 1 : 1

    let novoProdutoCarrinho = {
      ...produtoAtual,
      "idProdutoCarrinho": parseInt(uniqueId())
    }

    let novoCarrinho = {
      "produtos": [...carrinho2.produtos, novoProdutoCarrinho],
      "valorTotal": novoValor,
      "quantidade": novaQuantidade,
      "id": carrinho2.id
    }

    console.log(novoCarrinho)

    dispatch(await fetcha(novoCarrinho))

      // fetch('http://localhost:3001/carrinho', {
      //   method: "POST",
      //   body: JSON.stringify(novoCarrinho),
      //   headers: { "Content-type": "application/json;charset=UTF-8" },
      // })
      //  .then(response => response.json())
      //  .then(json => {
      //   console.log(json)
      //     dispatch(changeCarrinho(json))
      //   })

    setDisplayPopUp("none")
    setBlurValue("blur(0px)")
    setCarrinhoMudou(carrinhoMudou + 1)
  }

  const handleClickCancelarProduto = (event) => {


    setDisplayPopUp("none")
    setBlurValue("blur(0px)")
  }
  
  const handleClickProduto = (event) => {
    let produtoId = (event.currentTarget.id);

    console.log(produtoId);

    let produtoAtual = produtos.filter(p => p.id == produtoId)[0]

    setProdutoPopUp(produtoAtual)

    setDisplayPopUp("block")
    setBlurValue("blur(5px)")
  }

    useEffect(() => {
      fetch('http://localhost:3001/produtos')
       .then(response => response.json())
       .then(json => {
          setProdutos(json)
          dispatch(iniciaProduto(json))
          console.log(json)
        })

      setProdutos(produtos)
      dispatch(iniciaProduto(produtos))

      //  if (carrinho2.quantidade === 0 ) {
      //   fetch('http://localhost:8000/carrinho/1', {
      //        "method": "PUT",
      //        "body": JSON.stringify(carrinho2),
      //        "headers": {"Content-type": "application/json;charset=UTF-8"}
      //      })
      //  }
     }, [])

    // useEffect(() => {
    //   if(carrinhoMudou > 0) {
    //     fetch('http://localhost:8000/carrinho/1', {
    //          "method": "PUT",
    //          "body": JSON.stringify(carrinho2),
    //          "headers": {"Content-type": "application/json;charset=UTF-8"}
    //        })
    //   } else {
    //     fetch('http://localhost:8000/carrinho', {
    //          "method": "POST",
    //          "body": JSON.stringify(carrinho2),
    //          "headers": {"Content-type": "application/json;charset=UTF-8"}
    //        })
    //   }
    // }, [carrinhoMudou])
  return (
    <>
      <div className="pop-pup-pizza-container" style={{display: displayPopUp}}>
        <div className="pop-up-pizza"> 
          <div className="pop-up-campos">
            <h2>{produtoPopUp && produtoPopUp.nome}</h2>
            <p>Descricao: {produtoPopUp && produtoPopUp.descricao}</p>
            <div>Valor: {produtoPopUp && produtoPopUp.valor}</div>
            <div className="botoes">
              <button type="button" id={produtoPopUp && produtoPopUp.id} onClick={handleClickConfirmarProduto}>Adicionar ao Carrinho</button>
              <button type="button" onClick={handleClickCancelarProduto}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`produtos-container blur`} style={{filter: blurValue}}>
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