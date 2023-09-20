import { configureStore } from "@reduxjs/toolkit";
import { pagamentoSlice } from "./pagamentoSlice"
import { carrinhoSlice}  from "./carrinhoSlice";
import { pedidoSlice } from "./pedidoSlice";

export default configureStore({
    reducer: {
        pagamento: pagamentoSlice.reducer,
        carrinho: carrinhoSlice.reducer,
        pedido: pedidoSlice.reducer
    }
})