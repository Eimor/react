import React, { Component } from 'react';
import { 
    ListGroupItem,
  } from 'react-bootstrap';

export default class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <ListGroupItem disabled={this.props.itemState} onClick={() => { this.props.onNextStep(); }}> 
            <p><strong>{this.props.value.nombre}</strong></p>
            <p><strong>Dirección: </strong>{ this.props.value.direccion}</p>
            <p><strong>Teléfono: </strong>{ this.props.value.telefono}</p>
            <p><strong>Deuda: </strong>{this.props.value.deuda === '' ? '$0' : '$'+this.props.value.deuda}</p>
        </ListGroupItem>
    )
  }
}