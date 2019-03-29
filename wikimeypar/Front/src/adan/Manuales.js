import React, {Component} from 'react';
import Nav from '../Components/Nav';
import folder from './img/carpeta.png';
import PDF from './img/pdf.png';

export default class MANUALES extends Component{
    constructor(){
        super();
        this.state = {
            Adventa:[
                {
                    id:1,
                    nombre: " Manual de Usuario Meypark",
                    url: "./Manuales/MANUAL_USUARIO_MEYPARK.pdf",
                    img: folder
                }        
            ],
            MNL:{
                id:1000,
                nombre: " Manual de Usuario Meypark",
                url: "./Manuales/MANUAL_USUARIO_MEYPARK.pdf",
                img: PDF
            }               
        }
    }
    render(){
        var adv = this.state.Adventa;
        var mnl = this.state.Adventa.MNL;
        return(
            <div>
                <Nav/>
                <div className="container">
                    <div className="row">
                        {adv.map((ADV) => <p><img src={ADV.img} width="20px"/>{ADV.nombre}</p>)}
                        
                    </div>
                </div>
            </div>
        );
    }
}