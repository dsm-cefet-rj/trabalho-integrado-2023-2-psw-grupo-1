import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState: {
      "produtos": [],
      "valorTotal": 0,
      "quantidade": 0
    },
    reducers:{
        changeCarrinho(state, { payload }) {
            return { 
                "produtos": [...state.produtos, payload.produtos],
                "valorTotal": parseInt(payload.valorTotal),
                "quantidade": parseInt(state.quantidade) + 1,
                "id": payload.id
            }
        },
        deleteProdutoCarrinho(state, { payload }) {
            console.log("a")
            console.log(state.valorTotal)
            console.log(payload.idProdutoCarrinho)
            console.log("b")
            return { 
                "produtos": state.produtos.filter(p => p.idProdutoCarrinho != payload.idProdutoCarrinho),
                "valorTotal": parseInt(state.valorTotal) - parseInt(payload.valorTotal),
                "quantidade": parseInt(state.quantidade) - 1,
                "id": state.id
            }
        }
    }
})

export const { changeCarrinho, deleteProdutoCarrinho } = carrinhoSlice.actions

export const selectCarrinho = state => state.carrinho

export default carrinhoSlice.reducer