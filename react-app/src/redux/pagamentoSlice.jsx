import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const pagamentoSlice = createSlice({
    name: "pagamento",
    initialState: {
        "idPagamento": 3,
        "valorPagamento": 0,
        "formaPagamento": 0,
        "id": 1
    },
    reducers:{
        changePagamento(state, { payload }) {
            return { 
                "idCarrinho": payload.idCarrinho,
                "valorPagamento": payload.valorPagamento,
                "formaPagamento": payload.formaPagamento,
                "id": parseInt(uniqueId())
            }
        }
    }
})

export const { changePagamento } = pagamentoSlice.actions

export const selectPagamento = state => state.pagamento

export default pagamentoSlice.reducer