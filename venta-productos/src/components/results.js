import React, { Component } from "react";
import { 
  Table,
} from 'react-bootstrap';
import AlertDismissable from './AlertDismissable';
import ResultItem from "./ResultItem";
var _ = require("underscore");

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.total = 0;
  }

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    const Subtotal = ({ pedido }) => (
      <tr>
        <td>Monto neto de IVA:</td>
        <td>${ (pedido.reduce((sum, i) => (sum += i.cantidad * i.precio), 0)).toFixed(2)}</td>
      </tr>
    );

    const IVA = ({ pedido }) => (
      <tr>
        <td>Monto de IVA:</td>
        <td>${ (pedido.reduce((sum, i) => (sum += i.cantidad * i.precio), 0) * 0.21).toFixed(2)}</td>
      </tr>
    );

    const Total = ({ pedido }) => (
      <tr>
        <td>Total con IVA:</td>
        <td>${ (pedido.reduce((sum, i) => (sum += i.cantidad * i.precio), 0) * 1.21).toFixed(2)}</td>
      </tr>
    );

    return (
      <div>
        <AlertDismissable tipMsg="Si el pedido es correcto presione finalizar para cargarlo y volver al inicio." />
        <Table responsive striped>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
            </tr>
          </thead>
        <tbody>
          {_.map(this.props.data.pedido, item => {
            let producto = _.findWhere(this.props.data.productos, {
              id: item.productoId
            });
            item.precio = producto.precio;
            return <ResultItem nombre={producto.nombre} cantidad={item.cantidad} precio={producto.precio} key={item.productoId}/>;
          })}
        </tbody>
        </Table>
        <h3 className="table-totals-title">Totales:</h3>
        <Table responsive striped className="table-results-totals">
          <tbody>
            <Subtotal pedido={this.props.data.pedido} />
            <IVA pedido={this.props.data.pedido} />
            <Total pedido={this.props.data.pedido} />
          </tbody>
        </Table>
      </div>
    );
  }
}
