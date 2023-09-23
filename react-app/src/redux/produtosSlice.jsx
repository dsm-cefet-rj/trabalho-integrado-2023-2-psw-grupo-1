import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const produtoSlice = createSlice({
    name: "produtos",
    initialState: [{
        "nome": "",
        "valor": 0,
        "descricao": "",
        "imagem": "",
        "id": 1
    }]
    ,
    reducers:{
        iniciaProduto(state, { payload }) {
            return payload
        }
    }
})

export const { iniciaProduto } = produtoSlice.actions

export const selectProduto = state => state.pagamento

export default produtoSlice.reducer