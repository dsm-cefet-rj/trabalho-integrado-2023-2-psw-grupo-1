import { useEffect, useState } from "react"
import "./home.css"

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  
    useEffect(() => {
      console.log("aaaaaaaaaaa")
      fetch('http://localhost:8000/produtos')
       .then(response => response.json())
       .then(json => setProdutos(json))
     }, [])

  return (
    <>
      <div className="produtos-container">
        {produtos && produtos.map(p => {
          return <div key={p.id} className="produto">
                 <div className="imagem-produto">
                  <img src={p.imagem} alt="Pizza" />
                 </div>
                  <h2>{p.nome}</h2>
                  <p>Valor: R${p.valor}</p>
                </div>
        })}
      </div>
    </>
  );
}

export default TelaHome;