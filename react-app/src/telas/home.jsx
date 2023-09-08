import { useState } from "react";
import Produtos from "../dados/produto";

const TelaHome = () => {

  return (
    <>
      { Produtos.map(p => {
        return (
        <div>
          <img src="" alt="Foto Pizza" />
          <h2>{p.nome}</h2>
          <p>Valor: {p.valor}</p>
        </div>
        )
      }) }
    </>
  );
}

export default TelaHome;