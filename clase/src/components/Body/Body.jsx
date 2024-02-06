import './Body.css'
import React from "react"
import GameOverwatch from "../../Images/OverwatchDragon.jpg"

export const Body = () =>{
    return(
        <body>
        <nav>
        <img className="OverwatchImage" src={GameOverwatch} alt="GameOverwatch"></img>
        <button className='Button'>Más Información</button>



        </nav>
        </body>
    )
}