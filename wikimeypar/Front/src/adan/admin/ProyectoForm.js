import React, {Component} from 'react';
import {addProyect} from '../../service';

export default class Proyectos extends Component{
    constructor(){
        super();
        this.state = {
            proyect:{
                nombre: '',
                representado: '',
                telefono:'',
                pais:'',
                direccion:''
            }           
        }
    };
    handleChange = (e) => {
        const {proyect} = this.state;
        let field = e.target.name;
        proyect[field] = e.target.value;
        this.setState({proyect});
        console.log(this.state);
    };
    
    handleSubmit = (e) => {
        //e.preventDefault();
        addProyect(this.state.proyect, this.props.history);       
    };
    render(){
          let {nombre,representado,telefono,pais,direccion} = this.state.proyect;
        return(
        <div>
            <div className="">                
                <div className="margin-auto">
                    <div className="row mt-2">
                        <form className="center-block card"  onSubmit={this.handleSubmit}>
                            <div className="bg-primary text-center rounded">
                                <label className="h2 text-center">Registro de Nuevos Proyectos</label>
                            </div>
                            <div className="col-md form-group mt-2">
                                <div className="row">
                                    <div className="form-group col">
                                        <label for="text">Nombre del Proyecto:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="nombre" 
                                        value={nombre}
                                        placeholder="Nombre del Proyecto"
                                        className="form-control" required/>
                                    </div>
                                    <div className="col form-group">
                                        <label for="text">Representado por:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="representado" 
                                        value={representado}
                                        placeholder="Nombre del Representante"                                    
                                        className="form-control"/>
                                    </div>  
                                </div>     
                                <div className="row">
                                    <div className="form-group col">
                                        <label for="text">Tel&eacute;fono:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="telefono" 
                                        value={telefono}
                                        placeholder="Telefono"
                                        className="form-control" />
                                    </div>
                                    <div className="col form-group">
                                        <label for="text">Pa&iacute;s:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="pais" 
                                        value={pais}
                                        placeholder="Pais"                                    
                                        className="form-control"/>
                                    </div>                                           
                                </div>      
                                <div className="row">
                                    <div className="form-group col">
                                        <label for="text">Direcci&oacute;n Completa:</label>
                                        <input 
                                        onChange={this.handleChange}
                                        type="text"
                                        name="direccion" 
                                        value={direccion}
                                        placeholder="Calle, número, Delegación/Municipio, CP"
                                        className="form-control" />
                                    </div>
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