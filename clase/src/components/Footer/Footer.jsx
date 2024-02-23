// Se importar el estilos CSS asociados al componente
import './Footer.css'
// Se importa la librería React y las imagenes asociados al componente
import React from 'react'
import BlizzardsLogo from "../../Images/BlizzardsLogo.png"
import xTwitter from "../../Images/icons8-twitterx.svg"
import xFacebook from "../../Images/icons8-facebook.svg"
import xReddit from "../../Images/reddit.svg"
import xInstagram from "../../Images/icons8-instagram.svg"
import xYoutube from "../../Images/icons8-youtube-play.svg"


// Componente funcional Footer
export const Footer = () => {
    return(
       <section className='Footer'>
        <section className="left-Footer">
        <img className='blizzards-Logo' src={BlizzardsLogo} alt="BlizzardLogo" />
        <section className='Word'>
        <h3 className='Entertainment'>©2024 Blizzard Entertainment, Inc.</h3>
        <h3 className='Marcas'>Todas las marcas comerciales a las que se hace referencia son propiedad de sus respectivos dueños.</h3>
        </section>

        <section className='Terms'>
        <h3 className='Privacidad'>Privacidad</h3>
        <h3 className='Legal'>Legal</h3>
        <h3 className='Terminos'>Términos</h3>
        <h3 className='politica-Cookies'>Politica de cookies</h3>  
        <h3 className='ajustes-Cookies'>Ajustes de cookies</h3>  
        </section>
        <section className='righ-Icons'>

        <button className='button-Twitter'>   
            <img className= "xTwitter" src={xTwitter} alt="TwitterLogo"></img>
        </button>

        <button className='button-Facebook'>   
            <img className= "xFacebook" src={xFacebook} alt="FacebookLogo"></img>
        </button>

      
        <button className='button-Reddit'>   
            <img className= "xReddit" src={xReddit} alt="RedditLogo"></img>
        </button>

         <button className='button-Instagram'>   
            <img className= "xInstagram" src={xInstagram} alt="InstagramLogo"></img>
        </button>

        <button className='button-Youtube'>   
            <img className= "xYoutube" src={xYoutube} alt="YoutubeLogo"></img>
        </button>
      
        </section>
        </section>
    
      </section>
     
        
    )    
}