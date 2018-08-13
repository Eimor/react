import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  handleChange= (e) => {
    this.setState({ value: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
  }

  render() {

    return (    
        <div className="col-md-8 col-centered">
          <div className="search-box">
            <form >
              <div className="m0 search-box-input">
                <input
                  type="text"
                  value={this.state.value}
                  onChange={ e=> this.handleChange(e)}
                  placeholder="Busqueda de cliente"
                />
                <button type="submit" onClick={ e => this.onSubmit(e) } className="btn btn-link search-btn">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
    );
  }
}
