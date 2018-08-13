import React, { Component } from 'react';
import { 
  Alert, 
} from 'react-bootstrap';
export default class AlertDismissable extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleDismiss = this.handleDismiss.bind(this);
      this.state = {
        show: true
      };
    }
  
    handleDismiss() {
      this.setState({ show: false });
    }
  
    render() {
      if (this.state.show) {
        return (
          <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
            <strong>Tip:</strong> {this.props.tipMsg}
          </Alert>
        );
      }
  
      return false;
    }
  }