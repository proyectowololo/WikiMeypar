/*IMPORTAR DEPENDENCIAS*/
import React, { Component } from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Router from './Router'

/*IMPORTAR CSS*/
import '../src/css/style.css'
import '../src/css/animate.css'
import '../src/css/bootstrap.css'
import '../src/css/flexslider.css'
import '../src/css/icomoon.css'
import '../src/css/magnific-popup.css'
import '../src/css/owl.carousel.min.css'
import '../src/css/owl.theme.default.min.css'

class App extends Component {
 render() {
   return (
     <div>
       <Router/>
     </div>
   );
 }
}

export default App;
