import React, {Component} from 'react'
import CountTo from 'react-count-to'

class Statistics extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="colorlib-counter" class="colorlib-counters" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>Estadísticas actuales</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<div class="col-md-4 col-sm-4 text-center animate-box">
							<div class="counter-entry">
								<span class="icon"><i class="icon-paperplane"></i></span>
								<div class="desc">
									<CountTo class="colorlib-counter js-counter" to={1345} speed={2000}/>
									<span class="colorlib-counter-label">Incidencias registradas</span>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 text-center animate-box">
							<div class="counter-entry">
								<span class="icon"><i class="icon-cup"></i></span>
								<div class="desc">
                                <CountTo class="colorlib-counter js-counter" to={25} speed={2000}/>
									<span class="colorlib-counter-label">Manuales de usuario</span>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 text-center animate-box">
							<div class="counter-entry">
								<span class="icon"><i class="icon-user2"></i></span>
								<div class="desc">
                                <CountTo class="colorlib-counter js-counter" to={30} speed={2000}/>
									<span class="colorlib-counter-label">Apéndices</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default Statistics;