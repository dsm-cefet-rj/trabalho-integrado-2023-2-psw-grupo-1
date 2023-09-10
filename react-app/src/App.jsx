import './App.css';
import AppRouter from './AppRouter';

function App(props) {
  return (
    <>
      <header>
        <h1>Brasa e Queijo Pizzaria</h1>
      </header>
      <AppRouter/>
      <footer>
        <nav>
          <a href="/">Cardapio</a>
          <a href="/carrinho">Carrinho</a>
          <a href="/pedido">Pedido</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
