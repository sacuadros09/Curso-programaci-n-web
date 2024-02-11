import './Header.css'
import React from "react"
import BlizzardLogo from "../../Images/LogoBlizzard.png"
import IconoCuenta from "../../Images/IconoCuenta.png"




export const Header=()=>{
    return(
        <header>
        <section className="NavBar">
        <section className="LeftCategories">
        <img className="Logo" src={BlizzardLogo} alt="BlizzardLogo"></img>
        <section className='Categories'>
        <p className='WarcraftTitle'>Warcraft</p>
        <p className='DiabloTitle'>Diablo</p>
        <p className='OverwatchTitle'>Overwatch </p>
        <p className='StarcraftTitle'>StarCraft</p>
        <button className='PointsTitle'>...</button>
        </section>
        </section>
        <section className="RightCatergories">
        <p className='InformacionTitle'>Información</p> 
        <p className='TiendaTitle'>Tienda</p>
        <img className='IconImg' src={IconoCuenta} alt="IconoCuenta"></img>
        <p className='CuentaTitle'>Cuenta</p>  
        <button className='DownloadBattleNet'>
            
            <img className= "IconImg"src = "https://cdn.icon-icons.com/icons2/1508/PNG/512/battlenet_104070.png"></img>
            Descarga Battle.net
        </button>
        </section>
        </section>
        </header>
    )
}   