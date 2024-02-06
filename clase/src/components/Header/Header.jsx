import './Header.css'
import React from "react"
import BlizzardLogo from "../../Images/LogoBlizzard.png"
import IconoCuenta from "../../Images/IconoCuenta.png"
import IconoBattleNet from "../../Images/IconoBattleNet.png"


export const Header=()=>{
    return(
        <header>
        <section className="NavBar">
        <section className="LeftCategories">
        <img className="Logo" src={BlizzardLogo} alt="BlizzardLogo"></img>
        <section className='Categories'>
        <p>Warcraft</p>
        <p>Diablo</p>
        <p>Overwatch </p>
        <p>Starcraft</p>
        <p>...</p> 
        </section>
        </section>
        <section className="RightCatergories">
        <p>Información</p> 
        <p>Tienda</p>
        <img className='IconImg' src={IconoCuenta} alt="IconoCuenta"></img>
        <p>Cuenta</p>  
        <button className='DownloadBattleNet'>
            
            <img className= "IconImg"src = "https://cdn.icon-icons.com/icons2/1508/PNG/512/battlenet_104070.png"></img>
            Descarga Battle.net
        </button>
        </section>
        </section>
        </header>
    )
}   