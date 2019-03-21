import React, {Component} from 'react'


class Information extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            
<div id="colorlib-services">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>¿Como funciona?</h2>
						<h4>Sabemos que existen incidencias frecuentes por lo que se realizó un compendio de solución paso a paso
                            de aquellas mas frecuentes para tener un stack de conocimientos antes de afrontarlas y saber que hacer.
                            Podrás encontrar lo siguiente:
                        </h4>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 text-center animate-box">
						<div class="services">
							<span class="icon">
								<i class="icon-lightbulb"></i>
							</span>
							<div class="desc">
								<h3>Solución de incidencias</h3>
								<p>Un paso a paso de aquellas incidencias recurrentes para saber como afrontarlas y resolverlas antes
                                    de su escalación.
                                </p>
							</div>
						</div>
					</div>
					<div class="col-md-4 text-center animate-box">
						<div class="services">
							<span class="icon">
								<i class="icon-mail5"></i>
							</span>
							<div class="desc">
								<h3>Reporta tu incidencia</h3>
								<p>Desde aquí podrá hacerse el registro de nuevas incidencias para su atención, enviando un correo
                                    automático a las áreas involucradas para su pronta atención.
                                </p>
							</div>
						</div>
					</div>
					<div class="col-md-4 text-center animate-box">
						<div class="services">
							<span class="icon">
								<i class="icon-map"></i>
							</span>
							<div class="desc">
								<h3>Manuales y documentos</h3>
								<p>Podrán ser descargados los manuales de usuario de los equipos así como documentos informativos para
                                    la resolución de problemas
                                </p>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>


        )
    }
}

export default Information;