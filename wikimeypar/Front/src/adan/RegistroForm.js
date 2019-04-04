import React, {Component} from "react";
import {signup} from '../service';

class Signup extends Component{

    constructor(){
      super();
      this.state =  {
          user: {
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              nombre:"",
              apellido:"",
              telefono:"",              
          }
      }
  }
  
  handleChange = (e) => {
    const {user} = this.state;
    let field = e.target.name;
    user[field] = e.target.value;
    this.setState({user});
    console.log(this.state);
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    signup(this.state.user, this.props.history)
  };
  
  
    render(){
      let {username,email, password, confirmPassword, nombre, apellido, telefono} = this.state.user;
      return(
  
  <div>
   <div className={this.props.contenedor}>                
                <div className="margin-auto">
                    <div className="row mt-2">
                        <form className="center-block card"  onSubmit={this.handleSubmit}>
                            <div className="bg-primary text-center rounded">
                                <label className="h2 text-center">Registro</label>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="text">Nombre:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="nombre"
                                        value={nombre} placeholder="Nombre"
                                    className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="text">Apellidos:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="apellido"
                                        value={apellido} placeholder="Apellidos"                                    
                                        className="form-control"/>
                                    </div>  
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="text">Correo Electr&oacute;nico:</label>
                                        <input className="form-control"
                                        onChange={this.handleChange}
                                        type="email"
                                        name="email"
                                        value={email} placeholder="Correo Electr&oacute;nico" />
                                    </div>  
                                    <div className="form-group">
                                        <label for="text">Telefono:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="telefono"
                                        value={telefono} placeholder="N&uacute;mero de Tel&eacute;fono"
                                    className="form-control"/>
                                    </div>                                      
                                </div>                                     
                            </div>
                            <div className="bg-secondary text-center rounded text-white">
                                    <label className="h2 text-center">Datos de Usuario</label>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="text">Usuario:</label>
                                            <input 
                                            onChange={this.handleChange}
                                            type="text"
                                            name="username"
                                            value={username} placeholder="Nombre de Usuario"
                                            className="form-control" />
                                        </div>
                                    </div>                                    
                                </div>    
                                <div className="row">
                                    <div className="col">                                          
                                        <div className="form-group">
                                            <label for="text">Contraseña:</label>
                                            <input 
                                        onChange={this.handleChange}
                                        type="password"
                                        name="password"
                                        value={password} placeholder="Contrase&ntilde;a"
                                            className="form-control" />
                                        </div> 
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="text">Confirma tu Contraseña:</label>
                                            <input 
                                            onChange={this.handleChange}
                                            type="password"
                                            name="confirmPassword"
                                            value={confirmPassword} placeholder="Confirma Contrase&ntilde;a"
                                            className="form-control" />
                                        </div>                                                                       
                                    </div>
                                </div>                       
                                <button type="submit" className="btn btn-primary col-12">Registrar</button>
                        </form>
                    </div>                    
                </div>
            </div>         
      </div>
  
      )
    }
  }
  
  export default Signup;