/*IMPORTAR DEPENDENCIAS*/
import React, { Component } from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

/*IMPORTAR CSS*/
import '../src/css/style.css'
import '../src/css/animate.css'
import '../src/css/bootstrap.css'
import '../src/css/flexslider.css'
import '../src/css/icomoon.css'
import '../src/css/magnific-popup.css'
import '../src/css/owl.carousel.min.css'
import '../src/css/owl.theme.default.min.css'

/*IMPORTAR COMPONENTES*/
import LeerLogs from './snh/LeerLogs';
import ADV_PS_Efectivo from './snh/ADV_PS_Efectivo';
import Landing from './Components/Landing'
import Nav from './Components/Nav'
import Presentation from './Components/Landing/Presentation'
import Carousel from './Components/Landing/Carousel'
import Information from './Components/Landing/Information'
import Form from './adan/BoletaServicioFrom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Nav/>
            <Form />
            <Presentation/>
            <Carousel/>
            <Information/>
          </p>
                  
        </header>
      </div>
    );
  }
}

export default App;
