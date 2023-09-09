import { useState } from "react";

const TelaCadastroProduto = () => {
    const [produtoForm, setProdutoForm] = useState(null)

    const handleOnSubmit = (e) => {
      e.preventDefault();
      var dado = {
         "nome": e.target.nome.value,
         "valor": e.target.valor.value
       }
       fetch('http://localhost:8000/produtos', {
         "method": "POST",
         "body": JSON.stringify(dado),
         "headers": {"Content-type": "application/json;charset=UTF-8"}
       })
       .then(response => response.json())
       .then(json => console.log(json))
    }

    const handleInputChange = (e) => {
      setProdutoForm({[e.target.name]: [e.target.value]})
      console.log(produtoForm)
    }
    return (
      <>
        <div>
            <h2>Cadastro de produto</h2>
            <form onSubmit={handleOnSubmit}>
                <label>Nome</label>
                <input type="text" name="nome" id="nome" onChange={handleInputChange} required/>
                <label>Valor</label>
                <input type="number" name="Valor" id="valor" onChange={handleInputChange} required/>
                <input type="submit" value="Submit" />
            </form>
        </div>
      </>
    );
  }
  
  export default TelaCadastroProduto;