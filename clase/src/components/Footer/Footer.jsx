import './Footer.css'
import React from 'react'
import BlizzardsLogo from "../../Images/BlizzardsLogo.png"


export const Footer = () => {
    return(
       <section className='Footer'>
        <section className="LeftFooter">
        <img className='BlizzardsLogo' src={BlizzardsLogo} alt="BlizzardLogo" />
        <h3 className='Entertainment'>©2024 Blizzard Entertainment, Inc.</h3>
        <h3 className='Marcas'>Todas las marcas comerciales a las que se hace referencia son propiedad de sus respectivos dueños.</h3>
        <h3 className='Privacidad'>Privacidad</h3>
        <h3 className='Legal'>Legal</h3>
        <h3 className='Terminos'>Términos</h3>
        <h3 className='PoliticaCookies'>Politica de cookies</h3>
        <h3 className='PoliticaCookies'>Ajustes de cookies</h3>  
        </section>
        <section className='RightFooter'>
      </section>
      </section>
     
        
    )    
}