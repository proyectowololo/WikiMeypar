import React, {Component} from 'react';
import {statusUss,deleteUss} from '../../service';
import {verUsers, verRol} from '../../serviceReturn';

export default class viewUser extends Component{
    constructor(){
        super();
        this.state = {
            Datos:[],
            Roles:[]
        }
    }
    componentDidMount(){
        this.verUss();        
    }
    verUss = () =>{
        verUsers()
        .then(res => {            
            this.setState({Datos:res.data}); 
            console.log(this.state);
        })
        .catch(err =>{
            console.log(err)
        });
        verRol()
        .then(res => {            
            this.setState({Roles:res.data}); 
        })
        .catch(err =>{
            console.log(err)
        });
    }
    changeStatus = (e) =>{
        let datos = {_id:e.target.value, status: e.target.checked};
        statusUss(datos);
        this.verUss();
    }
    deleteUss = (e) =>{
        let res = window.confirm("Estas seguro de eliminar el Usuario?")
        //console.log(e.target.value)
        let Id = {_id:e.target.value};
        if(res){
            deleteUss(Id)
            .then(res => {            
                if(res.msg === "Usuario eliminado Currectamente"){                               
                    this.verUss();
                }
            });
        }
    }
    render(){
        let DT = this.state.Datos;
        let rols = this.state.Roles;
        return(
            <div>
                <div className="col-7"> 
                    <table className="table table-hover">
                        <thead className="thead-dark"> 
                            <tr key="">
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Usuario</th>
                                <th title="Tipo de Usuario">TU</th>                                
                                <th>Creado</th>
                                <th>Modificado</th>
                                <th>Estatus</th>
                                <th></th>
                            </tr>                      
                        </thead>
                        <tbody>
                    {DT.map((obj)=>
                        <tr key={obj._id}>
                            <td>{obj.nombre}</td>
                            <td>{obj.apellido}</td>
                            <td>{obj.email}</td>
                            <td>{obj.telefono}</td>
                            <td>{obj.username}</td>
                            <td>
                                <select name="operador">
                                    <option defaultValue="" selected disabled>Selecciona Rol</option>
                                    {rols.map((oper) => 
                                    oper.status ?
                                    <option 
                                        key={oper.id} 
                                        defaultValue={oper.cons}>
                                        {oper.descripcion}
                                    </option>: null)}
                                </select>         
                            </td>                            
                            <td>{obj.created_at}</td>
                            <td>{obj.updated_at}</td>                            
                            <td className="text-center">
                                <input type="checkbox" defaultChecked={obj.userstatus} onClick={this.changeStatus} value={obj._id}/>
                            </td>
                            {(obj.usertype !== "Administrador")? 
                            <td className="text-center btn-group btn-group-xs">        
                                <button 
                                    className="btn btn-outline-danger btn-sm" 
                                    onClick={this.deleteUss} 
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
        );
    }
}