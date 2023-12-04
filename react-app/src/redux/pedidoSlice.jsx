import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const alteraPedido = createAsyncThunk(
    'alteraPedido',
    async (payload, { getState }) => {
        const state = getState().pedido;
        var requestBody = {
            ...state,
            "idProdutoCarrinho": payload.idProdutoCarrinho,
            "localEntrega": payload.localEntrega,
            "numeroPedido": Math.floor(Math.random()*100),
            "idCarrinho": payload.idCarrinho
        }

        const response = await fetch("http://localhost:3001/pedido", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "Content-type": "application/json;charset=UTF-8" },
        })
        .then(res => res.json())
        return response
    }
  )

export const pedidoSlice = createSlice({
    name: "pedido",
    initialState: {
      "idProdutoCarrinho": 0,
      "localEntrega": "",
      "numeroContato": "91234-5678",
      "tempoEntrega": 30,
      "numeroPedido": 0,
      "statusPedido": "Aguardando Confirmação"
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
    },
    extraReducers: (builder) => {
        builder.addCase(alteraPedido.fulfilled, (state, { payload }) => {
          return payload
        })
      }
})

export const { changePedido, alteraStatus } = pedidoSlice.actions

export const selectPedido = state => state.carrinho

export default pedidoSlice.reducer