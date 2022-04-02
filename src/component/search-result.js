import React, { Component } from 'react';
import ArtistCard from './artist-card.js';
import "bootstrap/dist/css/bootstrap.css"
import Loading from './loading.js';
import Error from './error.js';

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data:{
      similarartists:{
        artist: []
      }
    }
  }

  componentWillReceiveProps(e){
    let termino = e.busqueda;
    console.log(termino, 'dale boquita',e)
    this.fetchData("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+ 
    termino 
    +"&api_key=36cf1dc2054f81f7e7f75a3a08ad8330&format=json")
  }


/*   componentDidMount(){
    this.fetchData("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=korn&api_key=36cf1dc2054f81f7e7f75a3a08ad8330&format=json")
  } */

  fetchData = async url =>{
    try {
      this.setState({
        loading: true
      })
      const response = await fetch(url)
      const data = await response.json();
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMEnsaje: data.message
        });
      } else {
        this.setState({
          error: false,
          loading: false,
          data: data
        });
      }
    } catch (error) {
      console.log({message:error})
    }
    
  }
    render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading/>}
        {this.state.error && <Error errorMEnsaje={this.state.errorMEnsaje} />}
        <div className='container'>
        <div className="row">
          {this.state.data.similarartists.artist.map((artista,i)=>{
          return <ArtistCard img={artista.image[1]["#text"]} titulo={artista.name} key={i}/>
          })} *
        </div>
      </div>
      </React.Fragment>
  );
}
}

export default SearchResult;
