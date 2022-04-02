import React from "react";
import "./search-bar.css"
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

class SearchBar extends React.Component{
    state = {
        busqueda:""
    }
    handleChange = e =>{
        this.setState({busqueda: e.target.value})
        console.log(e.target.name, e.target.value)
    };
/*     handleClick = e =>{
        //Prevenimos la regarda del boton
        e.preventDefault()
        console.log(e.target.name, "Ouch")
    }; */
    handleSubmit = e =>{
        e.preventDefault()
        console.log(e.target.name)
    }
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-2">
                        <Link to="/">
                        <img src={logo} alt="" className="logo-barra"/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                    <form 
                    className=""
                    name="form"
                    onSubmit={this.handleSubmit}>
                        <div className="busqueda">
                            <input 
                            id="buscar"
                            type="text"
                            name="busqueda"
                            value={this.props.busqueda}
                            onChange={this.props.onChange}
                            placeholder="Busca una banda"
                            />
                        </div>
                    </form>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        )
    }
}

export default SearchBar;