import React, { Component } from 'react';
import SearchBar from './component/search-bar.js';
import SimilarArtist from './component/similar-artist.js';
import "./page-artist.css";
import Loading from "./component/loading.js";
import Error from "./component/error.js";

class PageArtist extends Component {
  state = { 
    data: {
      artist: {
        image: [
          {"text": ""},
          {"text": ""},
          {"text": ""},
          {"text": ""},
          {"text": ""}
        ],
        bio: {
          summary: ""
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" }
              ]
            }
          ]
        }
      }
    }
   }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps){
    if(this.props.location !== prevProps.location){
      this.fetchData()
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    let artista = this.props.history.location.search.substr(1);
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=6c028a05bb3337cbf567aa148b8839cf&format=json";
    this.setState({
      loading: true
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
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
  };

    render() {
    return (
    <React.Fragment>
      {this.state.loading && <Loading />}
      {this.state.error && <Error errorMEnsaje={this.state.errorMEnsaje} />}
      <div className="container">
          <div className="row centrar">
              <div className="col-md-3"/>
              <div className="col-md-6">
                  <img src={this.state.data.artist.image[2]["#text"]} 
                  alt=""
                  className="pic-artist margenes50" />

                  <h2>{this.state.data.artist.name}</h2>
                  <p>{this.state.data.artist.bio.summary}</p>
              </div>
          </div>
          <div className="row centrar">
          <SimilarArtist data={this.state.data.artist.similar.artist}/>
          </div>
      </div>
    </React.Fragment>
  );
}
}

export default PageArtist;
