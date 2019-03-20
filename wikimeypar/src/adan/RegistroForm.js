import React, {Component} from "react";

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            nombre: '',
            apellidos: '',
            correo: '',
            telefono: '',
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
                                <label className="h2 text-center">Registro</label>
                            </div>
                            <div className="col-md form-group mt-2">
                                <div className="form-group">
                                    <label for="text">Nombre:</label>
                                    <input 
                                    name="nombre" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.handleInput}
                                    placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label for="text">Apellidos:</label>
                                    <input 
                                    name="apellidos" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.handleInput}/>
                                </div>  
                                <div className="form-group">
                                    <label for="text">Correo Electr&oacute;nico:</label>
                                    <input 
                                    name="correo" 
                                    type="email" 
                                    className="form-control" 
                                    onChange={this.handleInput}/>
                                </div>  
                                <div className="form-group">
                                    <label for="text">Telefono:</label>
                                    <input 
                                    name="telefono" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.handleInput}/>
                                </div>  
                                <div className="form-group">
                                    <label for="text">Usuario:</label>
                                    <input 
                                    name="usuario" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.handleInput}/>
                                </div>                                
                                <button type="submit" className="btn btn-primary col-12">Registrar</button>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        );
    }
}