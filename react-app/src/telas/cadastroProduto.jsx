import { useState } from "react";
import "./cadastroProduto.css"

const TelaCadastroProduto = () => {
    const [produtoForm, setProdutoForm] = useState(null)

    const handleOnSubmit = (e) => {
      e.preventDefault();
      var dado = {
         "nome": e.target.nome.value,
         "valor": e.target.valor.value,
         "descricao": e.target.descricao.value,
         "imagem": "../imagens/pizza-portuguesa.jpg"
       }
       fetch('http://localhost:8000/produtos', {
         "method": "POST",
         "body": JSON.stringify(dado),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })
       .then(response => response.json())
       .then(json => console.log(json))

       alert("Produto cadastrado com sucesso")
    }

    const handleInputChange = (e) => {
      setProdutoForm({[e.target.name]: [e.target.value]})
      console.log(produtoForm)
    }
    return (
      <>
        <div className="cadastro-container">
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleOnSubmit} className="form">
              <div className="campo">
                <label>Nome</label>
                <input type="text" name="nome" id="nome" onChange={handleInputChange} required/>
              </div>
              <div className="campo descricao">
                <label>Descrição</label>
                <textarea type="text" name="descricao" id="descricao" onChange={handleInputChange} required/>
              </div>
              <div className="campo valor">
                <label>Valor</label>
                <input type="number" name="Valor" id="valor" onChange={handleInputChange} required/>
              </div>
              <div className="campo botao">
                <input type="submit" value="Cadastrar" />
              </div>
            </form>
        </div>
      </>
    );
  }
  
  export default TelaCadastroProduto;