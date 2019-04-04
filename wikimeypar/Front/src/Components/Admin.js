import React, {Component} from 'react'
import {Card, Dropdown, Button, Navbar, Nav} from 'react-bootstrap'
import jake from '../img/jake.png'
import {Link} from 'react-router-dom'
import NuevoProy from '../adan/admin/ProyectoForm'
import CreaRol from '../adan/admin/rolesUsuario'
import Registro from '../adan/RegistroForm'


class Admin extends Component{
    constructor(){
        super();
        this.state = {
            forms:{
                NProject: false,
                CreateUss: false,
                CreateRol: false
            }          
        }
    }
    mosclt = (e) => {
        const {forms} = this.state;
        let field = e.target.name;
        forms.NProject = false;        
        forms.CreateUss = false; 
        forms.CreateRol = false;       
        this.setState({forms});
        forms[field] = (forms[field] ? false:true);        
        this.setState({forms});
        console.log(forms);
    }
    render(){
        return(
            <div>
                <div className="black">
               
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand>
                            Home
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link>
                            <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Proyectos
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Ver Proyectos</Dropdown.Item>
                                        <Dropdown.Item  name="NProject" onClick={this.mosclt}>Nuevo Proyecto</Dropdown.Item>                            
                                    </Dropdown.Menu>
                                </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Usuarios
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Ver Usuarios</Dropdown.Item>
                                        <Dropdown.Item name="CreateUss" onClick={this.mosclt}>Nuevo Usuario</Dropdown.Item> 
                                        <Dropdown.Item name="CreateRol" onClick={this.mosclt}>Roles de Usuario</Dropdown.Item>                            
                                    </Dropdown.Menu>
                                </Dropdown>
                        </Nav.Link>
                        </Nav>                        
                    </Navbar>                                     
                   
                </div>
                <div className="row justify-content-center" >
                    <div className="col-2">
                        <Card style={{ width: '10rem' }}>
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
                        { this.state.forms.NProject ? <NuevoProy />:null}
                        { this.state.forms.CreateUss ? <Registro />:null}
                        { this.state.forms.CreateRol ? <CreaRol />:null}
                    </div>
                </div>
             
            </div>
        )
    }
}

export default Admin;