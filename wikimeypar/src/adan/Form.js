import React, {Component} from 'react';

class FORM extends Component{
    constructor(){
        super();
        this.state = {
            titulo: '',
            incidencia: '',
            archivos: '',
            fecha:'',
            usuario:''
        };

        this.handleInput = this.handleInput.bind(this);
    }
    componentDidMount(){
    this.titulo.focus();
    }    
    handleInput(e){
        //console.log(e.target.value, e.target.name);
        const {value , name} = e.target; 
        this.setState({
            [name] : value
        });
    }
    render(){
        var estiloU = {"text-decoration":"underline"};
        return(
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md">
                        <form onSubmit={(e) =>{e.preventDefault()}}>
                            <div className="row">
                                <div className="col-3">
                                    <label className="h3">T&iacute;tulo de la Incidencia</label>
                                </div>
                                <div className="col-9">
                                    <input type="text" 
                                    name="titulo"
                                    className="form-control" 
                                    ref={(input) => { this.titulo = input;}} 
                                    onChange={this.handleInput} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label className="h3">Incidencia</label>
                                </div>
                                <div className="col-9">                                    
                                    <textarea type="text" 
                                    name="incidencia"
                                    className="form-control" 
                                    rows="10"
                                    onChange={this.handleInput}/>
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
                                    multiple="true"  />
                                </div>
                            </div>                            
                            <div className="row justify-content-end mt-2">
                                <div className="col-9">                                    
                                <input type="submit" className="btn btn-primary col-12" value="Guardar"/>
                                </div>
                            </div>                            
                        </form>
                    </div>
                </div>                
            </div>
        );
    }
}

export default FORM;