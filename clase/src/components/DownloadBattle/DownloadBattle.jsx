import './DownloadBattle.css'
import React from 'react'
import blizardLogo from "../../Images//IconoCuenta.png"



export const DownloadBattle = () => {
    return(
       <section className='download-Battle'>
        <img className='download-battle-Ne' src="https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltb1b55d28d4835ac9/64c007d6a4648b44a076cd13/Desktop.jpg?format=webply&quality=80&auto=webp" alt="BattleNet" />
        <img className='logo-Download' src="https://cdn.icon-icons.com/icons2/1508/PNG/512/battlenet_104070.png"></img>
        <h2 className='battle-Tittle'>BATTLE.NET</h2>
        <h1 className='battle-Download'>Descarga Battle.net</h1>
        <h4 className='battle-Description'>Todos tus juegos de Blizzard en un mismo sitio.</h4>
        <button className='net-Button'>Descargar</button>
        <button className='info-Button'>Más información</button>
      </section>
      
     
        
    )    
}