import TelaHome from "./telas/home"
import TelaLogin from "./telas/login"
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
                <Route path="/" element={<TelaHome/>}></Route>
                <Route path="/login" element={<TelaLogin/>}></Route>
                <Route path="/pedido" element={<TelaPedido/>}></Route>
            </Routes>
        </Router>
      </>
    );
  }
  
export default AppRouter;