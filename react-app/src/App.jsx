import './App.css';
import AppRouter from './AppRouter';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate()
  const pedido = useSelector(state => state.pedido)

  const handleClickPedido = () => {
    if (pedido.numeroPedido === 0) {
      alert("É preciso terminar de fazer o pedido ver o pedido")
      return;
    }
    navigate("pedido")
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
          <a onClick={() => navigate("/carrinho")}>Carrinho</a>
          <a onClick={handleClickPedido}>Pedido</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
