import React, {Component} from 'react';

class ADV_PS_Efectivo extends Component{
   constructor(){
       super();
   }
   render(){
       var stylo1 = {'font-size':'14.5px'}
       var stylo2 = {'font-size':'13.5px'}
       return(
           <div>
               <h1>
               <p style={stylo1}><strong>01.-</strong> Identificación de la banda recibida. (TPA)
               <br/>
               <strong>02.-</strong> Inicio de la máquina de estado del ChipDNA que comunica con el servidor de CreditCall. Inicia la petición de transacción. (LibOperTC_EMV)
               <br/>
               <strong>03.-</strong> Inicio de transacción. Se muestra también información relacionada con la transacción. (Servidor CreditCall)
               <br/>
               <strong>04.-</strong> Evento de tarjeta extraída del PinPad. Dicho evento significa que el usuario ya ha completado su parte, y que se ha extraído la tarjeta del PinPad para proceder con la transferencia
               <br/>
               <strong>05.-</strong> Evento recibido por parte del driver ChipDNA y envió del FireEvent al TPA. (LibOperTC_EMV)
               <br/>
               <strong>06.-</strong> Finalización de la transacción con el resultado de "APPROVED". (Servidor CreditCall)
               <br/>
               <strong>07.-</strong> Fin de la máquina de estado del ChipDNA.
               <br/>
               <strong>08.-</strong> Evento de Pago completado recibido por el TPA. (TPA)</p>
               </h1>
               <ol><li><p style={stylo2}>| <font color="#2874A6">2018-11-06 12:08:18.228</font> | <font color="#A93226">TPA</font> | IdentificarBanda: Banda plana '053000900300812628310604991800101100000000000000000000005'. |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:22:16.499</font> | <font color="#A93226">TPA</font> | Arrancado máquina ChipDNA - Start() |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:22:42,145</font> | <font color="#A93226">ChipDNAServer</font> | ChipDNA #lc.#kc: StartTransaction: Terminal ID=25018444, Parameters=[ Key: AMOUNT, Value: 300 ],... |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:23:00.663</font> | <font color="#A93226">ChipDNAServer</font> | ChipDNA #Uf.#ji::PaymentDeviceOnCardNotificationEvent(..) CurrentEvent: Swiped |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:23:00.678</font> | <font color="#A93226">TPA</font> | FireCardStatusEvent(TARJETA_LEIDA): |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:23:05.811</font> | <font color="#A93226">ChipDNAServer</font> | ChipDNA #lc.#kc: TransactionFinished -&gt; [ Key: TRANSACTION_RESULT, Value: APPROVED ],... |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:22:05.811</font> | <font color="#A93226">TPA</font> | ChipDNATransactionFinished event detected |</p></li>
               <li><p style={stylo2}>| <font color="#2874A6">2018-10-17 09:22:05.982</font> | <font color="#A93226">TPA</font> | LLamada a ShowWPFInformacionProcesando: PAYMENT COMPLETED |</p></li></ol>           
               
           </div>
       )
   }
}

export default ADV_PS_Efectivo;