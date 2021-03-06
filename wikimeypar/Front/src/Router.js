import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Incidencia from './adan/IncidenciasForm'
import Login from './adan/LoginForm'
import Registro from './adan/RegistroForm'
import Boleta from './adan/BoletaServicioFrom'
import Admin from './Components/Admin'
import Proyectos from './adan/admin/ProyectoForm'
import incidenciaV from './snh/IncidenciaView'
//import ManualesList from './Components/Manuales/MainManuales'

const Router = () => (

    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/incidencia" component={Incidencia} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Registro} />
        <Route exact path="/boleta" component={Boleta} />
        <Route exact path="/main/admin" component={Admin} />
        <Route exact path="/main/admin/proyectos" component={Proyectos} />
        <Route exact path="/incidenciaV" component={incidenciaV} />
        {/*<Route exact path="/listamanuales" component={ManualesList} />*/}
    </Switch>
)

export default Router;