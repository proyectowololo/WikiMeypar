import React, {Component} from 'react';

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
                                <div id="colorlib-logo"><a href="index.html">Incidencias Meypar</a></div>
                            </div>
                            <div class="col-md-10 text-right menu-1">
                                <ul>
                                    <li class="active"><a href="index.html">Home</a></li>
                                    <li class="has-dropdown">
                                        <a href="work.html">Incidencias</a>
                                        <ul class="dropdown">
                                            <li><a href="#">Mey-tech</a></li>
                                            <li><a href="#">Ingenia</a></li>
                                            <li><a href="#">Adventa</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="services.html">Glosario</a></li>
                                    <li><a href="blog.html">Apéndices</a></li>
                                    <li><a href="about.html">Descargas y manuales</a></li>
                                    <li><a href="contact.html">Reporta tu incidencia</a></li>
                                    <li class="btn-cta"><a href="#">Sign Up</a></li>
                                    <li class="btn-cta"><a href="#">Login</a></li>
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