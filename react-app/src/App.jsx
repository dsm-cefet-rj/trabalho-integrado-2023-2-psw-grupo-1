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
          <a href="/">Link1</a>
          <a href="/">Link2</a>
          <a href="/">Link3</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
