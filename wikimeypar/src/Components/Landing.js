import React, {Component} from 'react';
import Nav from './Nav'
import Presentation from '../Components/Landing/Presentation'
import Carousel from '../Components/Landing/Carousel'
import Information from '../Components/Landing/Information'
import Statistics from '../Components/Landing/Statistics'

class Landing extends Component{
   constructor(){
       super();
   }
   render(){
       return(
           <div>
               
            <Nav/>
            <Presentation/>
            <Carousel/>
            <Information/>
            <Statistics/>

           </div>
       )
   }
}

export default Landing;