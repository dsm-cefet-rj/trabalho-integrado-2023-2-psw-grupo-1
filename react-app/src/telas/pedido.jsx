import pedidoSlice from "../redux/pedidoSlice"
import "./pedido.css"
import { useSelector } from "react-redux"

const TelaPedido = () => {
    const pagamento = useSelector(state => state.pagamento)
    const pedido = useSelector(state => state.pedido)

    return (
      <>
            <div>
                <h2 style={{textAlign: 'center'}}>Pedido</h2>

                <div class="retanguloRedondo">
                    <h3 style={{ textAlign: 'center'}}>2 pizzas calabresa</h3>
                    <p>Local de entrega: {pedido && pedido.localEntrega}</p>
                    <p>Status do Pedido: {pedido && pedido.statusPedido}</p>
                    <p>Tempo de Espera: {pedido && pedido.tempoEntrega} minutos</p>
                    <p>Local de Entrega: {pedido && pedido.localEntrega}</p>
                    <p>Nº do pedido: {pedido && pedido.numeroPedido}</p>
                </div>

                <div class="retanguloRedondo retanguloContato" style={{ height: 40}}>
                    <p class="textoCentralizado2">Número de Contato: {pedido && pedido.numeroContato}</p>
                </div>
            </div>
      </>
    );
  }
  
  export default TelaPedido;