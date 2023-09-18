import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const pedidoSlice = createSlice({
    name: "pedido",
    initialState: {
      "idProdutoCarrinho": 0,
      "localEntrega": "",
      "numeroContato": "99999-9999",
      "numeroPedido": 0,
      "id": 1
    },
    reducers:{
        changePedido(state, { payload }) {
            return { 
                "idProdutoCarrinho": payload.idProdutoCarrinho,
                "localEntrega": payload.localEntrega,
                "numeroContato": "99999-9999",
                "numeroPedido": Math.floor(Math.random()*100),
                "id": parseInt(uniqueId())
            }
        }
    }
})

export const { changePedido } = pedidoSlice.actions

export const selectPedido = state => state.carrinho

export default pedidoSlice.reducer