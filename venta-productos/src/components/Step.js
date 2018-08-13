import React, { Component } from 'react';
import Clients from './clients.js';
import Product from './products.js';
import Results from './results.js';

import { 
    Button,
} from 'react-bootstrap';
  

export default class Step extends Component {

  componentDidMount() {}

  componentWillUnmount() {}

  shouldStepRender(){
    if (this.props.stepIndex == this.props.currentIndex){
        return (
            <div className="step-content">
                { this.props.type === 'clients' && <Clients data={this.props.data} onNextStep={this.props.onNextStep} /> }
                { this.props.type === 'product' && <Product data={this.props.data} updatePedido={this.props.updatePedido} /> }
                { this.props.type === 'results' && <Results data={this.props.data}  /> }

                {!this.props.hideButton &&
                    <div className="row step-button-wrapper">
                        <Button bsStyle="info" onClick={ () => this.props.onNextStep() }>{this.props.buttonNextText || 'Siguiente'}</Button>
                    </div>
                }
            </div>
        );
    }
  }

  render() {

    return (
        <div>
            {this.shouldStepRender()}
        </div>
    )
  }
}