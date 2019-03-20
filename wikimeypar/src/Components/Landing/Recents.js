import React, {Component} from 'react'

class Recents extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div class="colorlib-blog">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>Incidencias más recientes</h2>
						<p>En este apartado se encuentran las incidenas más recientemente reportadas para poder contar con su 
                            actualización y observar nuevos cambios o releases.
                        </p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 animate-box">
						<article class="article-entry">
							<div class="admin">
								<p><span><i class="icon-user2"></i>Gama: Adventa</span> </p>
							</div>
							<div class="desc2">
								<h2><a href="blog.html">Incidencia en Bill2Bill</a></h2>
							</div>
							<a href="blog.html" class="blog-img imagenuno"></a>
							<div class="desc">
								<p class="meta"><span class="day">20</span><span class="month">Mar</span></p>
								<p>Existe una incidencia de desfase en el Bill2Bill entre la CPU y el dispositivo</p>
							</div>
						</article>
					</div>
					<div class="col-md-4 animate-box">
						<article class="article-entry">
							<div class="admin">
								<p><span><i class="icon-user2"></i>Gama: Ingenia</span></p>
							</div>
							<div class="desc2">
								<h2><a href="blog.html">Incidencia en servidor</a></h2>
							</div>
							<a href="blog.html" class="blog-img imagendos" ></a>
							<div class="desc">
								<p class="meta"><span class="day">09</span><span class="month">Ene</span></p>
								<p>Se reportan caidas constantes del servidor en Mundo E provocando inestabilidad en el servicio</p>
							</div>
						</article>
					</div>
					<div class="col-md-4 animate-box">
						<article class="article-entry">
							<div class="admin">
								<p><span><i class="icon-user2"></i>Gama: Mey-tech</span></p>
							</div>
							<div class="desc2">
								<h2><a href="blog.html">Fallas en Dallas</a></h2>
							</div>
							<a href="blog.html" class="blog-img imagentres" ></a>
							<div class="desc">
								<p class="meta"><span class="day">08</span><span class="month">Feb</span></p>
								<p>Solicitud de reportes personalizados para parking en Dallas</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default Recents;