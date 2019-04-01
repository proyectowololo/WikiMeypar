import React,{Component} from 'react'
import {addRol} from '../../service';

export default class Roles extends Component{
    constructor(){
        super();
        this.state = {
            roles : {
                descripcion:''
            }
        }
    }
    
    handleChange = (e) => {
        const {roles} = this.state;
        let field = e.target.name;
        roles[field] = e.target.value;
        this.setState({roles});
        console.log(this.state);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        addRol(this.state.roles, this.props.history);       
    };
    render(){
        let {descripcion} = this.state.roles;
        return(
            <div>
                <div className="row">
                    <div className="col-5">
                        <div className="">
                            <form onSubmit={this.handleSubmit}>
                                <div  className="form-group">
                                    <label>Rol de Usuario</label>
                                    <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    name="descripcion"
                                    value={descripcion} placeholder="Descripción"                                    
                                    className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-primary col-12">Guardar</button>
                            </form>
                        </div>
                    </div>     
                    <div className="col-6 card">
                        Tabla de roles de usuario
                    </div>                                  
                </div>                    
            </div>
        );
    }
}