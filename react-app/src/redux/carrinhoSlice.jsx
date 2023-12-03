import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetcha = createAsyncThunk(
  'TESTE',
  async (payload) => {
    const response = await fetch('http://localhost:3001/carrinho', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
    .then(res => res.json())
    return response
  }
)

export const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState: {
      "produtos": [],
      "valorTotal": 0,
      "quantidade": 0
    },
    reducers:{
        //  changeCarrinho(state, { payload }) {
        //     var a = fetch('http://localhost:3001/carrinho', {
        //         method: "POST",
        //         body: JSON.stringify(payload),
        //         headers: { "Content-type": "application/json;charset=UTF-8" },
        //       })
        //       .then(response => response)

        //       console.log(a.data)
        //       console.log(JSON.parse(a))

        //       return JSON.parse(a)
        // },
        deleteProdutoCarrinho(state, { payload }) {
            let novoCarrinho = { 
                "produtos": state.produtos.filter(p => p.idProdutoCarrinho != payload.idProdutoCarrinho),
                "valorTotal": parseInt(state.valorTotal) - parseInt(payload.valorTotal),
                "quantidade": parseInt(state.quantidade) - 1,
                "id": payload.id
            }

            console.log(123)
            console.log(payload)
            console.log(state)
            console.log(novoCarrinho)
            console.log(123)

            fetch(`http://localhost:3001/carrinho/${payload.id}`, {
                "method": "PUT",
                "body": JSON.stringify(novoCarrinho),
                "headers": {"Content-type": "application/json;charset=UTF-8"}
              })

            return novoCarrinho
        }
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetcha.fulfilled, (state, { payload }) => {
        // Add user to the state array
        return payload
      })
    },
})

export const { changeCarrinho, deleteProdutoCarrinho } = carrinhoSlice.actions

export const selectCarrinho = state => state.carrinho

export default carrinhoSlice.reducer