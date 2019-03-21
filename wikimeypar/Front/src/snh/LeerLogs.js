import React, {Component} from 'react';

class LeerLogs extends Component{
   constructor(){
       super();
   }
   render(){
       return(
           <div>
               <h1>Lectura de LOG's</h1>
               <ul>
                   <li><strong>ADV - PROCESO DE PAGO:&nbsp;<font size="2"><a href="http://localhost:8080/wordpress/adv_ps_efectivo/">(PAGO EN SALIDA + PAGO CON BILLETES)</a></font></strong></li>
                   <li><strong>ADV - PROCESO DE PAGO:&nbsp;<font size="2"><a href="http://localhost:8080/wordpress/adv_ps_tdc/">(PAGO EN SALIDA + TARJETA DE CREDITO)</a></font></strong></li>
                   <li><strong>ING - PROCESO DE PAGO:&nbsp;<font size="2">(PAGO EN SALIDA + PAGO CON BILLETES)</font></strong></li>
                   <li><strong>ING - PROCESO DE PAGO:&nbsp;<font size="2">(PAGO EN SALIDA + TARJETA DE CREDITO)</font></strong></li></ul>
            </div>
       )
   }
}

export default LeerLogs;