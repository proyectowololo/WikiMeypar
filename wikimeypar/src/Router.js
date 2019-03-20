import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Incidencia from './adan/IncidenciasForm'

const Router = () => (
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/incidencia" component={Incidencia} />
    </Switch>
)

export default Router;