import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const alteraPagamento = createAsyncThunk(
    'alteraPagamento',
    async (payload) => {
      const response = await fetch("http://localhost:3001/pagamento", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json;charset=UTF-8" },
      })
      .then(res => res.json())
      return response
    }
  )

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
    },
    extraReducers: (builder) => {
        builder.addCase(alteraPagamento.fulfilled, (state, { payload }) => {
          return payload
        })
      },
})

export const { changePagamento } = pagamentoSlice.actions

export const selectPagamento = state => state.pagamento

export default pagamentoSlice.reducer