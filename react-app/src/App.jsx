import './App.css';
import AppRouter from './AppRouter';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate()
  const pedido = useSelector(state => state.pedido)
  const carrinho = useSelector(state => state.carrinho)

  const handleClickPedido = () => {
    if (pedido.numeroPedido === 0) {
      alert("É preciso terminar de fazer o pedido ver o pedido")
      return;
    }
    navigate("pedido")
  }

  const handleClickCarrinho = () => {
    if (carrinho.quantidade === 0) {
      alert("É preciso preencher o carrinho para acessar.")
      return;
    }
    navigate("carrinho")
  }

  return (
    <>
      <header>
        <h1>Brasa e Queijo Pizzaria</h1>
      </header>
      <AppRouter/>
      <footer>
        <nav>
          <a onClick={() => navigate("/cardapio")}>Cardapio</a>
          <a onClick={handleClickCarrinho}>Carrinho</a>
          <a onClick={handleClickPedido}>Pedido</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
