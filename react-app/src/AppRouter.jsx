import TelaCadastroProduto from "./telas/cadastroProduto";
import TelaCarrinho from "./telas/carrinho";
import TelaHome from "./telas/home"
import TelaLogin from "./telas/login"
import TelaPagamento from "./telas/pagamento";
import TelaPedido from "./telas/pedido"
import TelaExcluirProduto from "./telas/excluirProduto";
import {
    Routes,
    Route
} from "react-router-dom";

const AppRouter = () => {
    return (
      <>
          <Routes>
              <Route path="/cardapio" element={<TelaHome/>}></Route>
              <Route path="/" element={<TelaLogin/>}></Route>
              <Route path="/pedido" element={<TelaPedido/>}></Route>
              <Route path="/cadastroProduto" element={<TelaCadastroProduto/>}></Route>
              <Route path="/carrinho" element={<TelaCarrinho/>}></Route>
              <Route path="/pagamento" element={<TelaPagamento/>}></Route>
              <Route path="/excluirProduto" element={<TelaExcluirProduto/>}></Route>
          </Routes>
      </>
    );
  }
  
export default AppRouter;