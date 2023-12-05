import "./carrinho.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteProdutoCarrinho } from "../redux/carrinhoSlice"
import { useNavigate } from "react-router-dom"

const TelaCarrinho = () => {
    const carrinhoSelector = useSelector(state => state.carrinho)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleButtonClick = (event) => {
      navigate('../pagamento');
    }

    const handleClickLixeira = (event) => {
      
      console.log(event.currentTarget.id) //Esse ID recebe o idProdutoCarrinho. 
        
      let produtoCarrinhoExcluir = carrinhoSelector.produtos.filter(p => p.idProdutoCarrinho == event.currentTarget.id)[0]

      let valorProduto = produtoCarrinhoExcluir.valor

      let dado = {
        "idProdutoCarrinho": event.currentTarget.id,
        "valorTotal": valorProduto,
        "id": carrinhoSelector.id
      }

      dispatch(deleteProdutoCarrinho(dado))
    }

    return (
      <>
        <div className="carrinho-container">
           {carrinhoSelector && carrinhoSelector.produtos.map(p => {
            return ( 
                <div key={p.idProdutoCarrinho} className="produto-container">
                    <div className="imagem-produto">
                        <img src={p.imagem} alt="Pizza" />
                    </div>
                    <div className="produto-info">
                        <h3>{p.nome}</h3>
                        <p>Valor: {p.valor}</p>
                    </div>
                    <button type="button" className="botao-lixeira">
                    <div className="lixeira" onClick={handleClickLixeira} id={p.idProdutoCarrinho}>X</div> </button>
                </div>
            )
           })}
             <div className="valor-total">Valor Total: R${carrinhoSelector && carrinhoSelector.valorTotal.toFixed(2)}</div>
             <div className="quantidade">Quantidade: {carrinhoSelector && carrinhoSelector.quantidade}</div>
              <button type="button" className="botao" cl onClick={handleButtonClick}>
            Pagar
          </button>
        </div>
      </>
    );
  }
  
  export default TelaCarrinho;
