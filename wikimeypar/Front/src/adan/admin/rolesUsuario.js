import React,{Component} from 'react'
import {addRol, deleteRol,statusRol, editarRol} from '../../service';
import {verRol} from '../../serviceReturn';
import { checkPropTypes } from 'prop-types';

export default class Roles extends Component{
    constructor(){
        super();
        this.state = {
            roles : {
                id_cons: null,
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
            let num_dts = this.state.Datos.length-1;   
            let cons = (num_dts > -1)?this.state.Datos[num_dts]['cons']:0;
            this.setState({roles:{id_cons:cons+1}});
            console.log(this.state);
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
            if(res.msg === "Rol creado con éxito"){    
                this.setState({descripcion:''});
                this.nameInput.value=null;
                this.cargaContent();                
            }
        });       
    };
    changeStatus = (e) =>{
        let datos = {_id:e.target.value, status: e.target.checked};
        statusRol(datos);
        this.cargaContent();
    }
    deleteRol = (e) =>{
        let res = window.confirm("Estas seguro de eliminar el Rol?")
        //console.log(e.target.value)
        let Id = {_id:e.target.value};
        if(res){
            deleteRol(Id)
            .then(res => {            
                if(res.msg == "Rol eliminado Currectamente"){                               
                    this.cargaContent();
                    this.nameInput.value='';
                }
            });
        }
    }
    editRol = (e) =>{
        var edRol = prompt("Nuevo Nombre del Rol:");
        let datos = {_id:e.target.value, descripcion: edRol};
        editarRol(datos)
        .then(res => {            
            if(res.msg === "Rol actualizado Currectamente"){    
                this.cargaContent();               
            }
        }); ;
    }
    render(){
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
                                    placeholder="Descripción"                                    
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
                                    <th>#</th>
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
                                <td>{obj.cons}</td>
                                <td>{obj.descripcion}</td>
                                <td>{obj.created_at}</td>
                                <td>{obj.updated_at}</td>
                                {(obj.descripcion != "Administrador")? 
                                <td className="text-center"><input type="checkbox" defaultChecked={obj.status} onClick={this.changeStatus} value={obj._id}/></td>:null
                                }
                                {(obj.descripcion != "Administrador")? 
                                <td className="text-center btn-group btn-group-xs">                                    
                                    <button 
                                        className="btn btn-outline-primary btn-sm" 
                                        onClick={this.editRol} 
                                        value={obj._id}>
                                        Editar
                                    </button>
                                    <button 
                                        className="btn btn-outline-danger btn-sm" 
                                        onClick={this.deleteRol} 
                                        value={obj._id}>
                                        Eliminar
                                    </button>
                                </td>
                                :null}
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