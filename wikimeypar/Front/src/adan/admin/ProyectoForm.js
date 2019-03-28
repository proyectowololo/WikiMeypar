import React, {Component} from 'react'

export default class Proyectos extend Component{
    render(){
        return(
            <div>
   <div className="container">                
                <div className="margin-auto">
                    <div className="row mt-2">
                        <form className="center-block card"  onSubmit={this.handleSubmit}>
                            <div className="bg-primary text-center rounded">
                                <label className="h2 text-center">Registro</label>
                            </div>
                            <div className="col-md form-group mt-2">
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
                                     name="apellidos"
                                     value={apellidos} placeholder="Apellidos"                                    
                                    className="form-control"/>
                                </div>  
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
                                <div className="form-group">
                                    <label for="text">Usuario:</label>
                                    <input 
                                     onChange={this.handleChange}
                                     type="text"
                                     name="username"
                                     value={username} placeholder="Nombre de Usuario"
                                    className="form-control" />
                                </div>  
                                <div className="form-group">
                                    <label for="text">Contraseña:</label>
                                    <input 
                                   onChange={this.handleChange}
                                   type="password"
                                   name="password"
                                   value={password} placeholder="Contrase&ntilde;a"
                                    className="form-control" />
                                </div> 
                                <div className="form-group">
                                    <label for="text">Confirma tu Contraseña:</label>
                                    <input 
                                    onChange={this.handleChange}
                                    type="password"
                                    name="confirmPassword"
                                    value={confirmPassword} placeholder="Confirma Contrase&ntilde;a"
                                    className="form-control" />
                                </div>                               
                                <button type="submit" className="btn btn-primary col-12">Registrar</button>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>         
      </div>
        );
    }
}