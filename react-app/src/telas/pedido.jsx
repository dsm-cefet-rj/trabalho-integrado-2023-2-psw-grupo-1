import "./pedido.css"
const TelaPedido = () => {
    return (
      <>
            <div>
                <h2 style={{textAlign: 'center'}}>Pedido</h2>

                <div class="retanguloRedondo">
                    <h3 style={{ textAlign: 'center'}}>2 pizzas calabresa</h3>


                    <p>Status do Pedido:</p>
                    <p>Tempo de Espera:</p>
                    <p>Local de Entrega:</p>
                    <p>Nº do pedido:</p>
                </div>

                <div class="retanguloRedondo retanguloContato" style={{ height: 40}}>
                    <p class="textoCentralizado2">Número de Contato: 99999-9999</p>
                </div>
            </div>
      </>
    );
  }
  
  export default TelaPedido;