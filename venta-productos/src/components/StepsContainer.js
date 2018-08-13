import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Step from './Step.js';
import {mockData} from '../services/MockApi';

const MAX_STEPS = 2;

export default class StepsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };

    this.state.data = {};
    mockData.getProducts().then( response => {
        this.state.data.productos = response.data;
    });
  }

  handleNavigate = () => {
    if (this.state.currentStep === MAX_STEPS ) {
      this.state.currentStep = 0;
    } else {
      this.state.currentStep++;
    }
    this.setState({currentStep: this.state.currentStep});
  }

  handlePedido = (pedido) => {
    let data = {...this.state.data};
    data.pedido = pedido;
    this.setState({data : data});
  }

  render() {
    const mapCurrentStepToTitle = [  'Página de búsqueda de clientes',
                                     'Página de toma de pedidos',
                                     'Pantalla de confirmación de pedido'];

    return (
      <div className="main-wrapper container-fluid">
        <div className="row panel-wrapper">
          <h1 className="main-title">Client Managment</h1>
          <Panel bsStyle="success">
            <Panel.Heading className="panel-heading">
              <Panel.Title componentClass="h3">{mapCurrentStepToTitle[this.state.currentStep]}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Step  type="clients" stepIndex="0" currentIndex={this.state.currentStep} 
                     hideButton={true} data={this.state.data} 
                     onNextStep={this.handleNavigate} />
              <Step  type="product" stepIndex="1" currentIndex={this.state.currentStep} 
                     data={this.state.data}  hideButton={ this.state.data.pedido ? false : true }
                     onNextStep={this.handleNavigate} updatePedido={this.handlePedido }/>
              <Step  type="results" stepIndex="2" currentIndex={this.state.currentStep} 
                     buttonNextText="Finalizar" data={this.state.data} 
                     onNextStep={this.handleNavigate} />
            </Panel.Body>
          </Panel>
        </div>
      </div>
    )
  }
}