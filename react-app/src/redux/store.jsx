import { configureStore } from "@reduxjs/toolkit";
import { pagamentoSlice } from "./pagamentoSlice"
import { carrinhoSlice}  from "./carrinhoSlice";
import { pedidoSlice } from "./pedidoSlice";
import { produtoSlice } from "./produtosSlice";

export default configureStore({
    reducer: {
        pagamento: pagamentoSlice.reducer,
        carrinho: carrinhoSlice.reducer,
        pedido: pedidoSlice.reducer,
        produtos: produtoSlice.reducer
    }
})