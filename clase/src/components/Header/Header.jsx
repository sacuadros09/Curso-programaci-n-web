import React from "react"
import BlizzardLogo from "../../Images/LogoBlizzard.png"
import IconoCuenta from "../../Images/IconoCuenta.png"
import BattleNet from "../../Images/Battle Net.png"


export const Header=()=>{
    return(
        <header>
        <nav>
        <img src={BlizzardLogo} alt="BlizzardLogo"></img>
         <p>Warcraft</p>
        <p>Diablo</p>
        <p>Overwatch </p>
        <p>Starcraft</p>
        <p>Información</p>  
        <p>...</p>
        <p>Tienda</p>
        <img src={IconoCuenta} alt="IconoCuenta"></img>
        <p>Cuenta</p>  
        <img src={BattleNet} alt="BattleNet"></img>
        </nav>
        </header>
    )
}