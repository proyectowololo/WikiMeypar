import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div>

<nav class="colorlib-nav" role="navigation">
                <div class="top-menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 text-center">
                                <div id="colorlib-logo">Incidencias Meypar</div>
                            </div>
                            <div class="col-md-10 text-right menu-1">
                                <ul>
                                    <li class="active">Home</li>
                                    <li class="has-dropdown">
                                        Incidencias
                                        <ul class="dropdown">
                                            <li>Mey-tech</li>
                                            <li>Ingenia</li>
                                            <li>Adventa</li>
                                        </ul>
                                    </li>
                                    <li>Glosario</li>
                                    <li>Apéndices</li>
                                    <li>Descargas y manuales</li>
                                    <li>Reporta tu incidencia</li>
                                    <li class="btn-cta"><Link to="/signup">Sign Up></Link></li>
                                    <li class="btn-cta"><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
        )
    }
}

export default Nav;