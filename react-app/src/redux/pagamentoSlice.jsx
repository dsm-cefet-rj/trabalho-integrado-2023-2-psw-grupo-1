import { createSlice } from "@reduxjs/toolkit";

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
            console.log("pay a")
            console.log(payload)
            console.log(state)
            return { ...state, payload }
        }
    }
})

export const { changePagamento } = pagamentoSlice.actions

export const selectPagamento = state => state.pagamento

export default pagamentoSlice.reducer