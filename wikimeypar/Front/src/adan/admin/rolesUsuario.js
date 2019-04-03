import React,{Component} from 'react'
import {addRol} from '../../service';
import {verRol} from '../../serviceReturn';
import { checkPropTypes } from 'prop-types';

export default class Roles extends Component{
    constructor(){
        super();
        this.state = {
            roles : {
                descripcion:''
            },
            Datos:[]
        }
    }
    componentDidMount(){
        verRol()
        .then(res => {            
            this.setState({Datos:res.data});       
            console.log(this.state.Datos);
        })
        .catch(err =>{
            console.log(err)
        });
        
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
        var DT = this.state.Datos;
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                        <div className="">
                            <form onSubmit={this.handleSubmit}>
                                <div  className="form-group">
                                    <label>Rol de Usuario</label>
                                    <input 
                                    onChange={this.handleChange}
                                    type="text"
                                    name="descripcion"
                                    value={descripcion} placeholder="Descripción"                                    
                                    className="form-control"
                                    required/>
                                </div>
                                <button type="submit" className="btn btn-primary col-12">Guardar</button>
                            </form>
                        </div>
                    </div>     
                    <div className="col-7 card"> 
                        <table class="table table-hover">
                            <thead className="thead-dark"> 
                                <tr key="">
                                    <th>Descripción</th>
                                    <th>Creado</th>
                                    <th>Modificado</th>
                                    <th>Estatus</th>
                                    <th></th>
                                </tr>                                
                            </thead>
                            <tbody>
                        {DT.map((obj)=>
                            <tr key={obj}>
                                <td>{obj.descripcion}</td>
                                <td>{obj.created_at}</td>
                                <td>{obj.updated_at}</td>
                                <td className="text-center"><input type="checkbox" checked={obj.status}/></td>
                                <td className="text-center"><span className="btn btn-outline-danger btn-sm">X</span></td>
                            </tr>
                        )}                        
                            </tbody>
                        </table>
                    </div>                                  
                </div>                    
            </div>
        );
    }
}