import React,{Component} from 'react'

export default class Roles extends Component{
    constructor(){
        super();
        this.state ={
            Rol : {
                id:0,
                descripcionRol:''
            }
        }
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-5">
                        <div className="">
                            <form>
                                <div  className="form-group">
                                    <label>Rol de Usuario</label>
                                    <input type="text" className="form-control"/>
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