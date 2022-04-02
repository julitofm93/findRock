import React from "react";
import "./page-home.css";
import logo from"./logo.svg"
class PageHome extends React.Component{
  handleSubmit = e =>{
    e.preventDefault()
    // "?" PORQUE SE LE VA A PASAR UNA VARIABLE POR URL
    this.props.history.push("/busqueda?" + this.state.busqueda)
  }

  handleChange = e =>{
    this.setState({
      busqueda: e.target.value
    })
    console.log(e.target.value)
  }

  state = {
    busqueda: ""
  }
    render(){
        return (
        <div className="container">
            <div className="row centrado">
                <div className="col-md-6 centrar">
                <img src={logo} alt="" id="logo"/>
                <form
                    className="form-inline"
                    onSubmit={this.handleSubmit}
                    name="FOrm"
                >
                <div className="busqueda">
                    <input
                        name="busqueda"
                        type="text"
                        id="buscar"
                        //TODO EL VALUE SE VA A GUARDAR EN "BUSQUEDA"
                        value={this.props.busqueda}
                        placeholder="Busca una banda"
                        onChange={this.handleChange}
                    />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng">
                  EscuelaDevRock
                </button>
              </div>
            </form>
            </div>
            </div>
        </div>
        )
    }
}

export default PageHome;