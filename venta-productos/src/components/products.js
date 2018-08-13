import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import AlertDismissable from './AlertDismissable';
import Pedido from './Pedido';
import { 
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

var _ = require("underscore");
const KEYS_TO_FILTERS = ['nombre'];

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredProducts: Array( _.max(props.productos, function(e){ return e.id } ).id ).fill(0),
      selectedProducts: [],
    };

    this.searchUpdated = this.searchUpdated.bind(this);

  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  addProduct(producto)  {
    let already = _.findWhere(this.state.selectedProducts, {id: producto.id});
    if (!already) { //dont add if already there
      var selectedProducts = this.state.selectedProducts.slice();
      selectedProducts.push(producto);   
      this.setState({selectedProducts: selectedProducts});
    }   
  }
  
  render() {
    const filteredProducts = this.props.data.productos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
       <div> 
        <AlertDismissable tipMsg="Haga click en el producto para que sea agregado en el pedido y poder modificar la cantidad." />
        <SearchInput className="product-search-input" onChange={this.searchUpdated}/>
        { this.state.searchTerm.length > 0 &&
            <ListGroup>
              {filteredProducts.map(product => {
                return (
                  <ListGroupItem key={product.id} onClick={ this.addProduct.bind(this, product)}>
                      {product.nombre}
                  </ListGroupItem>
                  
                )
              })}
            </ListGroup>
        }
        <Pedido selectedProducts={ this.state.selectedProducts } updatePedido={ this.props.updatePedido }/>
        </div>
    )
  }
}
