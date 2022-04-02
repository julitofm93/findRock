import React, { Component } from 'react';
import PageSearchResult from './page-search-result.js'
import "bootstrap/dist/css/bootstrap.css"
import PageHome from './page-home.js';
import PageArtist from './page-artist.js';
import Layout from './component/layout.js';
import {BrowserRouter, Route, Switch} from "react-router-dom"
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/busqueda" component={PageSearchResult}></Route>
          <Route path="/artista" component={PageArtist}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </Layout>  
      </BrowserRouter>
    )
  }
}

export default App;
