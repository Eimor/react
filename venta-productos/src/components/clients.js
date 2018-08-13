import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchItem from './SearchItem';
import {mockData} from '../services/MockApi';
import AlertDismissable from './AlertDismissable';
import { 
  ListGroup,
} from 'react-bootstrap';

export default class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedClient: null,
        error: '',
    };
  }

  handleSeachClientResult = (clientNumber) =>{
    let selectedClient = {};
    let error = '';
    mockData.getClient(clientNumber).then( response => {
      //unico resultado dado que clientNumber es unico -CUIT-
      if (response.data.length > 0){
        selectedClient = response.data[0];
        this.setState({selectedClient});
      } else {
        //client not found
        error = 'No se ha encontrado ningun cliente con CUIT ' + clientNumber +'.';
        
      }
      this.setState({error});
    });
    
  }
  render() {
    return (
      <div className="container-fluid m0">
        <AlertDismissable tipMsg="Ingrese un CUIT para buscar un cliente." />
        <div className="row mb20">
            <SearchBar dataSet={this.props.data.clientes} onSearch={ (clientNumber) => this.handleSeachClientResult(clientNumber) } />
        </div>
        <div className="row">
          <ListGroup>
            { this.state.error ?
              <div className="alert alert-danger mt20" role="alert"> 
                  <strong>Error!</strong> {this.state.error}
              </div>
              :
              <div>
              { this.state.selectedClient &&
                  <SearchItem value={ this.state.selectedClient } 
                              itemState={this.state.selectedClient.deuda > 0 ? 'disabled':''} onNextStep={ this.state.selectedClient.deuda > 0 ? function(){} : this.props.onNextStep} /> 
              }

              { this.state.selectedClient && this.state.selectedClient.deuda > 0  && 
                <div className="alert alert-danger mt20" role="alert"> 
                  <strong>Deuda!</strong> El cliente no puede ser seleccionado porque presenta deuda.
                </div>
              }

              { this.state.selectedClient && this.state.selectedClient.deuda <= 0  && 
                <div className="alert alert-info mt20" role="alert"> 
                  Presione en el cliente para continuar con el pedido.
                </div>
              }
              </div>
            }
            

            
          </ListGroup>
        </div>
      </div>
    )
  }
}