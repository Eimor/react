import React, { Component } from 'react';

export default class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <tr>
            <td>{this.props.nombre}</td>
            <td>{this.props.cantidad}</td>
            <td>${this.props.precio}</td>
        </tr>
    )
  }
}