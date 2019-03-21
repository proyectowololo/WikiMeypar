import React,{Component} from "react";
import logo from './logo.JPG';

export default class BoletaServicio extends Component{
    constructor(){
        super();
        this.state = {
            numBoleta: 1234,
            servicio : 1,
            proyecto:[
                {nombre:"Antara"},
                {nombre:"Mundo E"},
                {nombre:"Perisur"},
                {nombre:"Santa Fe"},
            ],
            operador:[
                {nombre:"Juan"},
                {nombre:"Pedro"},
                {nombre:"Que gusto de Verte"},
                {nombre:"Super que eras licenciado"}
            ],
            estados:[
                {nombre:"Solido"},
                {nombre:"Liquido"},
                {nombre:"Gas"}
            ],
            mob: false,
            rowsTablemat: 1
        }

        this.handleClick = this.handleClick.bind(this);
        this.plusRows = this.plusRows.bind(this);
        this.downRows = this.downRows.bind(this);
    }
    handleClick(){        
        //console.log(this.state.mob);
        var MOB = (this.state.mob)? false:true;
        this.setState({mob:MOB});
    }
    plusRows(){ 
        var sum = this.state.rowsTablemat+1;
        this.setState({rowsTablemat: sum});
        console.log(this.state.rowsTablemat);
    }
    downRows(){         
        if(this.state.rowsTablemat > 0){
            var rest = this.state.rowsTablemat-1;
            this.setState({rowsTablemat: rest});
            console.log(this.state.rowsTablemat -1);
        }
    }
    render(){
        var Operadores = this.state.operador;
        var Proyects = this.state.proyecto; 
        var Estados = this.state.estados;       
        return(
            <div className="container mt-3 card">                                
                <form className="form">
                    <div className="row"> {/* Encabezado del Documento */}
                        <div className="col-6">
                            <img src={logo} width="300px" />
                        </div>
                        <div className="col-6 text-center">
                            <div className=" h3">
                                Boleta de Servicio N&uacute;mero: <span className="font-weight-bold text-danger ">{this.state.numBoleta}</span>                           
                            </div>
                            N&uacute;mero de Servicio: {this.state.servicio}
                        </div>
                    </div>
                    <br/>
                    <div className="row form-group"> {/* Inicio */}
                        <div className="col-md">
                            <label className="font-weight-bold">Proyecto:</label>
                            <select name="proyectos" className="form-control">
                                {Proyects.map((proy) => <option key={proy.nombre}>{proy.nombre}</option>)}
                            </select>
                        </div>
                        <div className="col-md">
                            <label className="font-weight-bold">Representado por:</label>
                            <select name="operador" className="form-control">
                                {Operadores.map((oper) => <option key={oper.nombre}>{oper.nombre}</option>)}
                            </select>
                        </div>
                        <div className="col-md">
                            <label className="font-weight-bold">Tel&eacute;fono:</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row form-group"> {/* Inicio */}
                        <div className="col-9">
                            <label className="font-weight-bold">Direcci&oacute;n</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md">
                            <label className="font-weight-bold">Pa&iacute;s</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row form-group"> {/* Inicio */}
                        <div className="col-md">
                            <label className="font-weight-bold">T&eacute;cnico</label>
                            <select name="tecnicos" className="form-control">
                                {Operadores.map((oper) => <option key={oper.nombre}>{oper.nombre}</option>)}
                            </select>
                        </div>
                        <div className="col-md mt-2">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <label className="font-weight-bold">CDMX</label>
                                    <input type="radio" className="form-control inline-block" name="CDMX-INt" value="CDMX" checked/>
                                </div>
                                <div className="col-3 text-center">
                                    <label className="font-weight-bold">Interior Rep.</label>
                                    <input type="radio" className="form-control inline-block" name="CDMX-INt" value="Interior Rep."/>
                                </div>
                                <div className="col-6">
                                    <label className="font-weight-bold">Estado</label>
                                    <select name="tecnicos" className="form-control">
                                        {Estados.map((est) => <option key={est.nombre}>{est.nombre}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container"> {/* Servicio Solicitado */}
                        <label className="h3 font-weight-bold">Servicio Solicitado</label>
                        <div className="row align-items-center">
                            <div className="col-md">
                                <div className="row">
                                    <div className="col-10 text-center">
                                        <div className="col-md">
                                            <label className="font-weight-bold d-inline col-2">Inspecci&oacute;n</label>                                            
                                        </div>
                                        <div className="col-md">
                                            <label className="font-weight-bold d-inline col-2">Arranque Inicial</label>                                            
                                        </div>
                                        <div className="col-md">
                                            <label className="font-weight-bold d-inline col-2">Programaci&oacute;n</label>                                            
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="col-md">
                                            <input type="checkbox"/>
                                        </div>
                                        <div className="col-md">
                                            <input type="checkbox"/>
                                        </div>
                                        <div className="col-md">
                                            <input type="checkbox"/>
                                        </div>
                                    </div>
                                </div>
                            </div>        
                            <div className="col-md">
                                <div className="row">
                                    <div className="col text-center">
                                        <div>
                                            <label className="font-weight-bold d-inline col-2">Servicio de Emergencia</label>                                            
                                        </div>
                                        <div>
                                            <label className="font-weight-bold d-inline col-2">Entrega de Equipo</label>                                            
                                        </div>
                                        <div>
                                            <label className="font-weight-bold d-inline col-2">Otro</label>
                                            <input type="checkbox"  onClick={this.handleClick} />
                                        </div>       
                                    </div>
                                    <div className="col text-center">
                                        <div className="col-md">
                                            <input type="checkbox"/>
                                        </div>
                                        <div className="col-md">
                                            <input type="checkbox"/>
                                        </div>
                                        <div className="col-md">
                                            {
                                                this.state.mob ?                                                
                                                    <input type="text" name="txtOtro" className="form-control" ref={(ip) => this.otro = ip} />                                                
                                                :null
                                            }
                                        </div>     
                                    </div>
                                </div>                                
                            </div>        
                        </div>
                    </div>
                    <div className="row"> {/* Descripción de la Falla */}
                        <div className="col">
                            <label className="h3 font-weight-bold">Descripci&oacute;n de la Falla</label>
                            <textarea rows="5" className="col form-control"/>
                        </div>
                    </div>
                    <div className="row"> {/* Materiales */}
                        <div className="col">
                            <label className="h3 font-weight-bold">Material</label>
                            <table className="table  table-bordered">
                                <thead class="thead-dark">
                                    <tr>
                                        <th  className="h4">Cantidad</th>
                                        <th  className="h4" colSpan="2">
                                            Descripci&oacute;n
                                            <span title="Agregar 1 Fila" className="btn btn-outline-success btn-sm  font-weight-bold float-right" onClick={this.plusRows}>+</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-md-auto"><input type="number" name="C1" className="form-control"/></td>
                                        <td className="col">
                                            <input type="text" name="D1" className="form-control d-inline"/>                                            
                                        </td>
                                        <td>
                                            <span title="Eliminar Fila" className="btn btn-outline-danger btn-sm  font-weight-bold" onClick={this.downRows}>-</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>                            
                        </div>
                    </div>
                    <div className="row"> {/* Descripción del Servicio */}
                        <div className="col">
                            <label className="h3 font-weight-bold">Descripci&oacute;n del Servicio</label>
                            <textarea rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row"> {/* Observaciones */}
                        <div className="col">
                            <label className="h3 font-weight-bold">Observaciones</label>
                            <textarea rows="5" className="form-control"></textarea>
                        </div>
                    </div>  
                    <div className="row"> {/* Información Final */}
                        <div className="col">
                            <label className="h3 font-weight-bold">Informaci&oacute;n Final</label>
                            <div className="row">
                                <div className="col">
                                    <div className="col-md">
                                        <label>¿Requiere de algún seguimiento?</label>
                                    </div>
                                    <div className="col-md">
                                        <label>¿Reparaci&oacute;n menor?</label>
                                    </div>
                                    <div className="col-md">
                                        <label>¿Reparaci&oacute;n mayor?</label>
                                    </div>
                                    <div className="col-md">
                                        <label>Tiempo de Trabajo</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="col-md">
                                        <label className="font-weight-bold">Si</label><input type="radio" name="group-1" checked/>
                                    </div>
                                    <div className="col-md">
                                        <label className="font-weight-bold">Si</label><input type="radio" name="group-2" checked/>
                                    </div>
                                    <div className="col-md">
                                        <label className="font-weight-bold">Si</label><input type="radio" name="group-3" checked/>
                                    </div>
                                    <div className="col-md">
                                        <label className="font-weight-bold">Fecha: </label><input type="date" className="form-control"/>
                                        <label className="font-weight-bold">Inicio: </label><input type="time" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="col-md">
                                        <label className="font-weight-bold">No</label><input type="radio" name="group-1" />
                                    </div>
                                    <div className="col-md">
                                        <label className="font-weight-bold">No</label><input type="radio" name="group-2" />
                                    </div>
                                    <div className="col-md">
                                        <label className="font-weight-bold">No</label><input type="radio" name="group-3" />
                                    </div>
                                    <div className="col-md">
                                        <label className="font-weight-bold">Fecha: </label><input type="date" className="form-control"/>
                                        <label className="font-weight-bold">Termino: </label><input type="time" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="row"> {/* Firmas */}
                        <div className="col">
                            <label className="h3 font-weight-bold">Representante MEYPAR:</label>       
                            <select name="operador" className="form-control">
                                {Operadores.map((oper) => <option key={oper.nombre}>{oper.nombre}</option>)}
                            </select>                     
                        </div>
                        <div className="col">
                            <label className="h3 font-weight-bold">Representante del Cliente:</label>     
                            <select name="operador" className="form-control">
                                {Operadores.map((oper) => <option key={oper.nombre}>{oper.nombre}</option>)}
                            </select>                       
                        </div>
                    </div>     
                    <br/>    
                    <input type="submit" className="btn btn-primary col-12 form-control" value="Guardar" />
                </form>
            </div>
        );
    }
}