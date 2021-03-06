import React, {Component} from 'react';
import Nav from '../Components/Nav';
import {addInquery} from '../service';
import {verincidencia} from '../serviceReturn';
import { finished } from 'stream';
import { isContext } from 'vm';
export default class incidenciaV extends Component{
    constructor(){
        super();

        this.state = {
            inquery:{
                id_cons: null,
                titulo: '',
                incidencia: '',
                archivos: '',
                usuario:'',
                consecutivo: 999
            },
            Datos:[]
            }
        }
        componentDidMount(){
            this.titulo.focus();
            this.cargaContent();
        //this.handleInput = this.handleInput.bind(this);
    }
    cargaContent = () =>{
        verincidencia()
        .then(res => {            
            this.setState({Datos:res.data}); 
            let num_dts = this.state.Datos.length-1;   
            let cons = (num_dts > -1)?this.state.Datos[num_dts]['cons']:0;
            this.setState({inquery:{id_cons:cons+1}});
            console.log(this.state);
        })
        .catch(err =>{
            console.log(err)
        });    
    }
    handleChange = (e) => {
        const {inquery} = this.state;
        let field = e.target.name;
        inquery[field] = e.target.value;
        this.setState({inquery});
        console.log(this.state);
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        addInquery(this.state.inquery, this.props.history)
    };
    
    /*handleInput(e){
        //console.log(e.target.value, e.target.name);
        const {value , name} = e.target; 
        this.setState({
            [name] : value
        });
    }*/


    SelText(e){
        let seleccion = document.getSelection();
        /*if(seleccion != ""){
            switch(e.target.name){
                case "bold":
                    alert("1" + e.target.name);
                    break;
                case "italic":
                    alert("2" + e.target.name);
                    break;
                case "underline":
                    alert("3" + e.target.name);
                    break;
                default:
                    alert();
                    break;
            }
        } */       
    }
    
    render(){

        var DT = this.state.Datos;
        return(
            <div>
                 <Nav/>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md">
                            <form className="card" onSubmit={this.handleSubmit}>
                                <div className="row text-right">
                                    <div className="col-3 text-center">
                                        <label className="h3 font-wieght-bold">
                                            Consecutivo 
                                            <span className="text-danger"> N° </span>
                                        </label>
                                    </div>
                                    <div className="col-9 text-center">                                    
                                        <label className="h3 font-wieght-bold">Incidencia -  
                                        {                                        
                                            (this.state.Datos.consecutivo)
                                        }
                                        </label>  
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label className="h3">Titulo de la Incidencia</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" 
                                        name="titulo"
                                        className="form-control" 
                                        ref={(input) => { this.titulo = input;}} 
                                        onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label className="h3">Incidencia</label>
                                    </div>
                                    <div className="col-9"> 
                                        <div className="hide">
                                            <input name="bold" type="button" className="btn btn-secondary text-white"
                                            value="Bold" onClick={this.SelText}/>
                                            <input name="italic" type="button" className="btn btn-secondary text-white"
                                            value="Italic" onClick={this.SelText} />
                                            <input name="underline" type="button" className="btn btn-secondary text-white"
                                            value="Underline" onClick={this.SelText} />    
                                        </div>                                   
                                        <textarea type="text" 
                                        name="incidencia"
                                        className="form-control" 
                                        rows="10"
                                        onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label className="h3">Archivos / Fotos</label>
                                    </div>
                                    <div className="col-9 mt-2">                                    
                                        <input type="file" 
                                        name="archivos"
                                        className="form-control-file btn"  
                                        multiple="true" 
                                        onChange={this.handleChange} />
                                    </div>
                                </div>                            
                                <div className="row justify-content-end mt-2">
                                    <div className="col-9">                                    
                                    <input type="submit" className="btn btn-primary col-12" value="Guardar"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div>
                            <form>
                        <div className="row">
                            <div className="col-3">
                                <label className="h1">Incidencia</label>
                            </div>
                            <div className="col-6">
                                <input type="text" 
                                    name="VerInc"
                                    className="form-control" 
                                    ref={(input) => { this.VerInc = input;}} 
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="col-7 card"> 
                        <table class="table table-hover">
                            <thead className="thead-dark"> 
                                <tr key="">
                                    <th>#</th>
                                    <th>Consecutivo</th>
                                    <th>Titulo</th>
                                    <th>Incidencia</th>
                                </tr>                                
                            </thead>
                            <tbody>
                        {DT.map((obj)=>
                            <tr key={obj._id}>
                                <td>{obj.cons}</td>
                                <td>{obj.consecutivo}</td>
                                <td>{obj.titulo}</td>
                                <td>{obj.incidencia}</td>
                            </tr>
                        )}                        
                            </tbody>
                        </table>
                    </div> 
                    </form>                                 
                    </div>
                    </div>                
                </div>
            </div>
        );
    }
}
