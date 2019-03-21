import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Incidencia from './adan/IncidenciasForm'
import Login from './adan/LoginForm'
import Registro from './adan/RegistroForm'
import Boleta from './adan/BoletaServicioFrom'

const Router = () => (
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/incidencia" component={Incidencia} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/registro" component={Registro} />
    <Route exact path="/boleta" component={Boleta} />
    </Switch>
)

export default Router;