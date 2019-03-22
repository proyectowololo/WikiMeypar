import React, {Component} from 'react'
import Particles from 'react-particles-js';
import { linkSync } from 'fs';
import {Link} from 'react-router-dom'

const particleBackground = {
    particles: {
        number: {
            value:150,
            density:{
                enable: true,
                value_area: 800
            }
        }
    }
}

class Presentation extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="page">
            <div class="colorlib-intro">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center">
                            <div class="intro">
                                <h1>Bienvenido al portal de incidencias de Meypar</h1>
                                <p>En este portal se podrá encontrar un índice de las incidencias más comunes en los parkings de Meypar
                                    a fin de contar con soluciones a la mano para su revisión puntual. Asimismo, un glosario con los términos
                                    mas utilizados, descarga de manuales y reporte de incidencias nuevas.
                                </p>
                                <p><Link to='/manualeslist' class="btn btn-primary btn-outline btn-md">Manuales</Link>
                                 <Link to='/incidencia' class="btn btn-primary btn-outline btn-md">Reporta incidencia</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        )
    }
}

export default Presentation;