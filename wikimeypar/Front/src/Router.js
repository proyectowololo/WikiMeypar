import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Incidencia from './adan/IncidenciasForm'
import Login from './adan/LoginForm'
import Registro from './adan/RegistroForm'
import Boleta from './adan/BoletaServicioFrom'
import Log from './snh/ADV_PS_Efectivo'
import Manuales from './adan/Manuales'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/incidencia" component={Incidencia} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Registro} />
        <Route exact path="/boleta" component={Boleta} />
        <Route exact path="/log" component={Log} />
    </Switch>
)

export default Router;