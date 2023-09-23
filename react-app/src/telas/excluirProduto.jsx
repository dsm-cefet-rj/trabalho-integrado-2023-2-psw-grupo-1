import { useEffect, useState } from "react"
import "./excluirProduto.css"

const TelaExcluirProduto = () => {
    const [produtos, setProdutos] = useState(null)
    const [produtoPopUp, setProdutoPopUp] = useState(null)
    const [displayPopUp, setDisplayPopUp] = useState("none")
    const [blurValue, setBlurValue] = useState("none")

    const handleClickConfirmarDelecao = (event)=> {
        let produtoId = parseInt(event.currentTarget.id);

        fetch(`http://localhost:8000/produtos/${produtoId}`, {
             "method": "DELETE",
             "headers": {"Content-type": "application/json;charset=UTF-8"}
           })
        
        setProdutos("altera estado")
        setDisplayPopUp("none")
        setBlurValue("blur(0px)")
    }

    const handleClickCancelar = (event) => {
        setDisplayPopUp("none")
        setBlurValue("blur(0px)")
    }

    const handleClickExcluirProduto = (event) => {
        let produtoId = parseInt(event.currentTarget.id);

        let produtoAtual = produtos.filter(p => p.id === produtoId)[0]
    
        setProdutoPopUp(produtoAtual)
        setDisplayPopUp("block")
        setBlurValue("blur(5px)")
    }

    useEffect(() => {
        fetch('http://localhost:8000/produtos')
         .then(response => response.json())
         .then(json => setProdutos(json))
       }, [produtos])

    return (
      <>
      <div className="pop-pup-pizza-container" style={{display: displayPopUp}}>
        <div className="pop-up-pizza"> 
          <div className="pop-up-campos">
            <h2>Deseja apagar a pizza: {produtoPopUp && produtoPopUp.nome}?</h2>
            <div className="botoes">
              <button type="button" id={produtoPopUp && produtoPopUp.id}onClick={handleClickConfirmarDelecao} >Apagar</button>
              <button type="button" onClick={handleClickCancelar}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
        <div className={`container-exclusao blur`} style={{filter: blurValue}}>
        {produtos && produtos.map(p => {
          return<div key={p.id} className="produto-exclusao">
                  <div className="imagem-produto">
                    <img src={p.imagem} alt="Pizza" />
                  </div>
                  <h2 name="nome">{p.nome}</h2>
                  <p name="valor">Valor: R${p.valor}</p>
                  <button className="botao-excluir" id={p.id} onClick={handleClickExcluirProduto}>X</button>
                </div>
        })}
      </div>
      </>
    );
  }
  
  export default TelaExcluirProduto;