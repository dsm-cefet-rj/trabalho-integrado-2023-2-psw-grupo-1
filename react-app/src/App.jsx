import './App.css';
import AppRouter from './AppRouter';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  return (
    <>
      <header>
        <h1>Brasa e Queijo Pizzaria</h1>
      </header>
      <AppRouter/>
      <footer>
            <nav>
              <a onClick={() => navigate("/")}>Cardapio</a>
              <a onClick={() => navigate("/carrinho")}>Carrinho</a>
              <a>Pedido</a>
            </nav>
      </footer>
    </>
  );
}

export default App;
