import './DownloadBattle.css'
import React from 'react'
import Mientras from "../../Images/Mientras.jpg"


export const DownloadBattle = () => {
    return(
       <section className='DownloadBattle'>
        <img className='Avila' src={Mientras} alt="Avilihna" />
        <button className='NetButton'>Descargar</button>
        <button className='InfoButton'>Más información</button>
      </section>
      
     
        
    )    
}