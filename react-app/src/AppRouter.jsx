import TelaCadastroProduto from "./telas/cadastroProduto";
import TelaCarrinho from "./telas/carrinho";
import TelaHome from "./telas/home"
import TelaLogin from "./telas/login"
import TelaPagamento from "./telas/pagamento";
import TelaPedido from "./telas/pedido"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const AppRouter = () => {
    return (
      <>
        <Router>
            <Routes>
                <Route path="/cardapio" element={<TelaHome/>}></Route>
                <Route path="/" element={<TelaLogin/>}></Route>
                <Route path="/pedido" element={<TelaPedido/>}></Route>
                <Route path="/cadastroProduto" element={<TelaCadastroProduto/>}></Route>
                <Route path="/carrinho" element={<TelaCarrinho/>}></Route>
                <Route path="/pagamento" element={<TelaPagamento/>}></Route>
            </Routes>
        </Router>
      </>
    );
  }
  
export default AppRouter;