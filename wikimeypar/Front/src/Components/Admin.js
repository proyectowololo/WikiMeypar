import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import jake from '../img/jake.png'

class Admin extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
             <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={jake} />
                 <Card.Body>
                     <Card.Title>Jake el Perro</Card.Title>
                         <Card.Text>
                         Hola, soy Jake el Perro
                         </Card.Text>
                    <Button variant="primary">Click!</Button>
                 </Card.Body>
             </Card>;

             <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={jake} />
                 <Card.Body>
                     <Card.Title>Jake el Perro</Card.Title>
                         <Card.Text>
                         Hola, soy Jake el Perro
                         </Card.Text>
                    <Button variant="primary">Click!</Button>
                 </Card.Body>
             </Card>;

            </div>
        )
    }
}

export default Admin;