import React,{Component} from 'react'
import {addRol} from '../../service';
import {deleteRol} from  '../../service';
import {statusRol} from  '../../service';
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
        this.cargaContent();        
    }
    cargaContent = () =>{
        verRol()
        .then(res => {            
            this.setState({Datos:res.data});       
            //console.log(this.state.Datos);
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
        addRol(this.state.roles, this.props.history)
        .then(res => {            
            if(res.msg == "Rol creado con éxito"){                               
                this.cargaContent();
                this.nameInput.value='';
            }
        });       
    };
    changeStatus = (e) =>{
        let datos = {_id:e.target.value, status: e.target.checked};
        statusRol(datos);
        //alert(e.target.checked);
    }
    deleteRol = (e) =>{
        let res = window.confirm("Estas seguro de eliminar el Rol?")
        //console.log(e.target.value)
        let Id = {_id:e.target.value};
        if(res){
            deleteRol(Id);
            this.cargaContent();
        }
    }
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
                                    required
                                    ref={(input) => { this.nameInput = input; }} />
                                </div>
                                <button type="submit" className="btn btn-primary col-12">Guardar</button>
                            </form>
                        </div>
                    </div>     
                    <div className="col-7"> 
                        <table className="table table-hover">
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
                            <tr key={obj._id}>
                                <td>{obj.descripcion}</td>
                                <td>{obj.created_at}</td>
                                <td>{obj.updated_at}</td>
                                <td className="text-center"><input type="checkbox" defaultChecked={obj.status} onClick={this.changeStatus} value={obj._id}/></td>
                                <td className="text-center"><button className="btn btn-outline-danger btn-sm" onClick={this.deleteRol} value={obj._id}>X</button></td>
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