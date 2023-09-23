import { useEffect, useState } from "react"
import "./excluirProduto.css"

const TelaExcluirProduto = () => {
    const [produtos, setProdutos] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/produtos')
         .then(response => response.json())
         .then(json => setProdutos(json))
       }, [])
    return (
      <>
        <div className={`container-exclusao`}>
        {produtos && produtos.map(p => {
          return<div key={p.id} className="produto-exclusao" id={p.id}>
                  <div className="imagem-produto">
                    <img src={p.imagem} alt="Pizza" />
                  </div>
                  <h2 name="nome">{p.nome}</h2>
                  <p name="valor">Valor: R${p.valor}</p>
                  <button className="botao-excluir">X</button>
                </div>
        })}
      </div>
      </>
    );
  }
  
  export default TelaExcluirProduto;