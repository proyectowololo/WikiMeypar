import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import jake from '../img/jake.png'
import {Link} from 'react-router-dom'
import NuevoProy from '../adan/admin/ProyectoForm'
import axios from 'axios'


class Admin extends Component{
    constructor(){
        super();
        this.state = {
            showNProject: false
        }
    }
    mosclt = () => {
        var MO = this.state.showNProject ? false:true;
        this.setState({showNProject : MO});
    }
    render(){
        return(
            <div>
                <div className="row justify-content-center" >
                    <div className="col-4">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Proyectos
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Ver Proyectos</Dropdown.Item>
                                <Dropdown.Item onClick={this.mosclt}>Nuevo Proyecto</Dropdown.Item>                            
                            </Dropdown.Menu>
                        </Dropdown>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={jake} />
                            <Card.Body>
                                <Card.Title>Jake el Perro</Card.Title>
                                    <Card.Text>
                                    Hola, soy Jake el Perro
                                    </Card.Text>
                                <Button variant="primary">Click!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        { this.state.showNProject ? <NuevoProy />:null}
                        
                    </div>
                </div>
             
            </div>
        )
    }
}

export default Admin;