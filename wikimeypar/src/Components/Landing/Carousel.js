import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import cajeros from '../../img/cajeros.jpg'
import parkims from '../../img/parkims.jpg'
import sistema from '../../img/sistema.png'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class CarouselMeypar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            
<Carousel>
  <Carousel.Item>
    <img className="d-block col-sm-offset-2" src={cajeros} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block col-sm-offset-3" src={parkims} alt="Third slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block col-sm-offset-4" src={sistema} alt="Third slide"/>
  </Carousel.Item>
</Carousel>
        
        )
    }
}

export default CarouselMeypar;