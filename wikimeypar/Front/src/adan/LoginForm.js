import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            usuario:'',
            pass: ''
        }

        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        //console.log(e.target.value, e.target.name);
        const {value , name} = e.target; 
        this.setState({
            [name] : value
        });
    }
    render(){
        return(
            <div className="container">                
                <div className="margin-auto">
                    <div className="row mt-2">
                        <form className="center-block card">
                            <div className="bg-primary text-center rounded">
                                <label className="h2 text-center">Login</label>
                            </div>
                            <div className="col-md form-group mt-2">
                                <div className="form-group">
                                    <label for="text">Usuario:</label>
                                    <input 
                                    name="usuario" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Contrase&ntilde;a:</label>
                                    <input name="pass" 
                                    type="password" 
                                    className="form-control" 
                                    onChange={this.handleInput}/>
                                </div>
                                <Link to="/" type="submit" className="btn btn-primary col-12">Ingresar</Link>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        );
    }
}