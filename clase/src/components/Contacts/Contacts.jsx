import './Contacts.css'
import React from 'react'
import Globe from "../../Images/Globe.png"
import Global from "../../Images/global-svgrepo-com.svg"


export const Contacts = () => {
    return(
       <section className='Contacts'>
        <section className="LeftContacts">
          <section className='Border'></section>
        <h3 className='Empleo'>Empleo</h3>
        <h3 className='Informacion'>Información</h3>
        <h3 className='Asistencia'>Asistencia</h3>
        <h3 className='Contacto'>Contacto</h3>
        <h3 className='Prensa'>Prensa</h3>
        <h3 className='Api'>Api</h3>
        <h3 className='MapaDelSitio'>Mapa del sitio</h3>  
        </section>
        <section className='RightContacts'>
        <button className='ButtonGlobeEu'>
            
            <img className= "Globe"src = {Global}></img>
            Español(EU)
        </button>
      </section>
      </section>
     
        
    )    
}