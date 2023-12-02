import { useState } from "react";
import "./cadastroProduto.css"

const TelaCadastroProduto = () => {
    const [produtoForm, setProdutoForm] = useState(null);
    const [image, setImage] = useState(null);

    const handleOnSubmit = (e) => {
      e.preventDefault();
      var dado = {
         "nome": e.target.nome.value,
         "valor": e.target.valor.value,
         "descricao": e.target.descricao.value,
         "imagem": "testa"
       }

       let formData = new FormData();
       formData.append("file", image);
       formData.append("body", JSON.stringify(dado));

       fetch('http://localhost:3001/produtos', {
         "method": "POST",
         "body": formData//,
         //"headers": {"Content-type": "multipart/form-data"}
       })
       .then(response => response.json())
       .then(json => console.log(json))

       alert("Produto cadastrado com sucesso")
    }

    const handleInputChange = (e) => {
      setProdutoForm({[e.target.name]: [e.target.value]})
    }

    const handleFileChange = (e) => {
      console.log(e.target.files[0])
      setImage(e.target.files[0])
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
                <input type="number" name="valor" id="valor" onChange={handleInputChange} required/>
              </div>
              <div className="campo valor">
                <label>Imagem Produto</label>
                <input type="file" name="file" id="file" onChange={handleFileChange} required/>
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