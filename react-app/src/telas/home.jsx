import { useEffect, useState } from "react"

const TelaHome = () => {
  const [produtos, setProdutos] = useState(null)
  
    useEffect(() => {
      console.log("aaaaaaaaaaa")
      fetch('http://localhost:8000/produtos')
       .then(response => response.json())
       .then(json => setProdutos(json))
     }, [])

  return (
    <>
      {produtos && produtos.map(p => {
        return <div key={p.id}>
                <h2>{p.nome}</h2>
                <p>{p.valor}</p>
               </div>
      })}
    </>
  );
}

export default TelaHome;