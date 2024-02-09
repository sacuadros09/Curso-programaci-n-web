import './Contacts.css'
import React from 'react'
import Globe from "../../Images/Globe.png"


export const Contacts = () => {
    return(
       <section className='Contacts'>
        <section className="LeftContacts">
        <h3 className='Empleo'>Empleo</h3>
        <h3 className='Informacion'>Información</h3>
        <h3 className='Asistencia'>Asistencia</h3>
        <h3 className='Contacto'>Contacto</h3>
        <h3 className='Prensa'>Prensa</h3>
        <h3 className='API'>Api</h3>
        <h3 className='Mapa del sitio'>Mapa del sitio</h3>  
        </section>
        <section className='RightContacts'>
        <button className='ButtonGlobeEu'>
            
            <img className= "Globe"src = {Globe}></img>
            Español(EU)
        </button>
      </section>
      </section>
     
        
    )    
}