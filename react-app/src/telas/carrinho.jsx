import { useEffect, useState } from "react";
import "./carrinho.css"

const TelaCarrinho = () => {
    const [carrinho, setCarrinho] = useState(null)

    const handleClickLixeira = () => {
        fetch('http://localhost:8000/carrinho/produtos/1', {
            "method": "DELETE",
            "body": JSON.stringify(carrinho),
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
                <div key={p.id} id={p.id} className="produto-container">
                    <div className="imagem-produto">
                        <img src={p.imagem} alt="Pizza" />
                    </div>
                    <div class="produto-info">
                        <h3>{p.nome}</h3>
                        <p>Valor: {p.valor}</p>
                    </div>
                    <div class="lixeira" onClick={handleClickLixeira}>X</div>
                </div>
            )
           })}
        </div>
      </>
    );
  }
  
  export default TelaCarrinho;