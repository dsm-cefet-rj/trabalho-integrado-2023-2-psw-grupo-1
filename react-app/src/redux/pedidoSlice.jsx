import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const pedidoSlice = createSlice({
    name: "pedido",
    initialState: {
      "idProdutoCarrinho": 0,
      "localEntrega": "",
      "numeroContato": "91234-5678",
      "tempoEntrega": 30,
      "numeroPedido": 0,
      "statusPedido": "Aguardando Confirmação",
      "id": 1
    },
    reducers:{
        changePedido(state, { payload }) {
            return {
                ...state,
                "idProdutoCarrinho": payload.idProdutoCarrinho,
                "localEntrega": payload.localEntrega,
                "numeroPedido": Math.floor(Math.random()*100),
                "id": parseInt(uniqueId())
            }
        },
        alteraStatus(state, { payload }) {
            return { 
                ...payload,
                "statusPedido": payload.statusPedido
            }
        }
    }
})

export const { changePedido, alteraStatus } = pedidoSlice.actions

export const selectPedido = state => state.carrinho

export default pedidoSlice.reducer