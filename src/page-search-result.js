import React, { Component } from 'react';
import ArtistCard from './component/artist-card.js';
import SearchBar from './component/search-bar.js';
import SearchResult from './component/search-result.js'
import "bootstrap/dist/css/bootstrap.css"

class PageSearchResult extends Component {
  state = {
    busqueda:""
  }

  componentDidMount(){
    let search = this.props.history.location.search.substr(1).replace("%20", " ")
    console.log(search)

    this.setState({
      busqueda: search
    })
  }
  componentWillMount(){
  }
  componentWillUnmount(){
  }
  
  handleChange = e => {
    this.setState({
      busqueda: e.target.value
    });
  };
    render() {
    return (
    <React.Fragment>
      <SearchBar 
      onChange={this.handleChange}
      busqueda={this.state.busqueda}
      />
      <SearchResult
      busqueda={this.state.busqueda}
      />
    </React.Fragment>
  );
}
}

export default PageSearchResult;
