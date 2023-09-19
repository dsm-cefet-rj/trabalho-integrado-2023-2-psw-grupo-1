import { configureStore } from "@reduxjs/toolkit";
import { pagamentoSlice } from "./pagamentoSlice"
import { carrinhoSlice}  from "./carrinhoSlice";

export default configureStore({
    reducer: {
        pagamento: pagamentoSlice.reducer,
        carrinho: carrinhoSlice.reducer
    }
})