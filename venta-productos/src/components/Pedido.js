import React, { Component } from 'react';
import { 
  Table,
} from 'react-bootstrap';

var _ = require("underscore");

export default class Pedido extends Component {
    constructor(props){
      super(props);
  
      this.state = {
          cantidades : [],
          pedido: [],
      };
    }
  
    updateCantidad (productoId, event) {
  
      let itemPedido = { productoId: productoId,
                         cantidad: event.target.value};
      
      let prevPedido = this.state.pedido.slice();    
      prevPedido.push(itemPedido);   
  
      let pedido = _.chain(prevPedido).indexBy("productoId").values().value().slice();
      this.setState({ pedido : pedido}, this.props.updatePedido( pedido ) );
    }
  
    render() {
        return(
          <Table responsive striped>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>
          <tbody>
            { this.props.selectedProducts.map( item => {
              return (
                <tr key={item.id} >
                    <td>{item.nombre}</td>
                    <td><input type="number" step="1" min="0" max="100" product={item.id}
                              onChange={ this.updateCantidad.bind(this, item.id) }
                              value={this.state.cantidades[item.id]}/>
                      </td>
                </tr>
              )
            })}
          </tbody>
          </Table>
        );
    }
  }