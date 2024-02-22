import './Contacts.css'
import React from 'react'
import Globe from "../../Images/Globe.png"
import Global from "../../Images/global-svgrepo-com.svg"

export const Contacts = () => {
    return(
       <section className='Contacts'>
        <section className="left-Contacts">
          <section className='Border'></section>
        <h3 className='Empleo'>Empleo</h3>
        <h3 className='Informacion'>Información</h3>
        <h3 className='Asistencia'>Asistencia</h3>
        <h3 className='Contacto'>Contacto</h3>
        <h3 className='Prensa'>Prensa</h3>
        <h3 className='Api'>Api</h3>
        <h3 className='mapa-del-Sitio'>Mapa del sitio</h3>  
        </section>
        <section className='right-Contacts'>
        <button className='button-globe-Eu'>
            
            <img className= "Globe"src = {Global}></img>
            Español(EU)
        </button>
      </section>
      </section>
     
        
    )    
}