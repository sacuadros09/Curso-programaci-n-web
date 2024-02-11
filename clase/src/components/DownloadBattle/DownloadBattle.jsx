import './DownloadBattle.css'
import React from 'react'
import DownloadBattleNet from "../../Images/DescargaBattleNet.jpeg"


export const DownloadBattle = () => {
    return(
       <section className='DownloadBattle'>
        <img className='DownloadBattleNe' src={DownloadBattleNet} alt="BattleNet" />
        <button className='NetButton'>Descargar</button>
        <button className='InfoButton'>Más información</button>
      </section>
      
     
        
    )    
}