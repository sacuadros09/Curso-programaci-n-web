import './Header.css'
import React, {useState} from "react"
import BlizzardLogo from "../../Images/LogoBlizzard.png"
import IconoCuenta from "../../Images/Icono Blanco.png"
import Menu from "../../Images/icons8-menú.svg"
import {HamburgerBlizzard} from "../NavBarHamburger/NavBarHamburger"
import {DiabloBlizzard} from "../NavBarDiablo/NavBarDiablo"
import {OverwatchBlizzard } from '../NavBarOverwatch/NavBarOverwatch'
import { StarcraftBlizzard } from '../NavBarStarcraft/NavBarStarcraft'
import { HeroesBlizzard } from '../NavBarHeroes/NavBarHeroes'
import { InformacionBlizzard } from '../NavBarInformacion/NavBarInformacion'
import { CelularBlizzard } from '../NavBarCelular/NavBarCelular'



export default function Header(){
    const [showMenu,setShowMenu] = useState(false)
    const [showMenu2, setShowMenu2] = useState(false)
    const [showMenu3, setShowMenu3] = useState(false)
    const [showMenu4, setShowMenu4] = useState(false)
    const [showMenu5, setShowMenu5] = useState(false)
    const [showMenu6, setShowMenu6] = useState(false)
    const [showMenu7, setShowMenu7] = useState(false)
    
    const handleClick = (e) => {
        setShowMenu(!showMenu)
      }
      
      const handleClick2 = (e) => {
        setShowMenu2(!showMenu2)
      }

      const handleClick3 = (e) => {
        setShowMenu3(!showMenu3)
      }

      const handleClick4 = (e) => {
        setShowMenu4(!showMenu4)
      }

      const handleClick5 = (e) => {
        setShowMenu5(!showMenu5)
      }

      const handleClick6 = (e) => {
        setShowMenu6(!showMenu6)
      }

      const handleClick7 = (e) => {
        setShowMenu7(!showMenu7)
      }



    return(
        <header>
        <section className="nav-Bar">
        <section className="left-Categories">
        <img className="Logo" src={BlizzardLogo} alt="BlizzardLogo"></img>
      <button className='pp' onClick={handleClick7}>
        <img className='Menu'  src={Menu} alt='MenuIcon'></img>
        </button>
     

        <section className='Categories'>

         <button className='warcrafts-button' onClick={handleClick}>
        <li className='warcraft-Title'>Warcraft</li>
        </button>

        <button className='diablos-button' onClick={handleClick2}>
        <li className='diablo-Title'>Diablo</li>
        </button>

        <button className='overwatch-button'onClick={handleClick3}>
        <li className='overwatch-Title'>Overwatch </li>
        </button>

        <button className='starcraft-button'onClick={handleClick4}>
        <li className='starcraft-Title'>StarCraft</li>
        </button>
        
        <button className='points-Title' onClick={handleClick5}>
           <li className='points-nam'>...</li> 
            </button>
        </section>
        </section>

        <section className="right-Catergories">

        <button className='informacion-button' onClick={handleClick6}>
        <li className='informacion-Title'>Información</li> 
        </button>

        <li className='tienda-Title'>Tienda</li>
        <img className='icon-Img' src={IconoCuenta} alt="IconoCuenta"></img>
        <li className='cuenta-Title'>Cuenta</li>  
        
        <button className='download-battle-Net'>
            
            <img className= "icon-Img"src = "https://cdn.icon-icons.com/icons2/1508/PNG/512/battlenet_104070.png"></img>
            Descarga Battle.net
        </button>
        </section>
        </section>
        <section className='hamburguer-nav-Bar'>
       {!showMenu ? null : <HamburgerBlizzard/>}
        </section>

        <section className='diablo-nav-Bar'>
       {!showMenu2 ? null : <DiabloBlizzard/>}
        </section>

        <section className='overwatch-nav-Bar'>
       {!showMenu3 ? null : <OverwatchBlizzard/>}
        </section>

        <section className='starcraft-nav-Bar'>
       {!showMenu4 ? null : <StarcraftBlizzard/>}
        </section>

        <section className='heroes-nav-Bar'>
       {!showMenu5 ? null : <HeroesBlizzard/>}
        </section>

        <section className='informacion-nav-Bar'>
       {!showMenu6 ? null : <InformacionBlizzard/>}
        </section>

        
        <section className='informacion-nav-Bar'>
       {!showMenu7 ? null : <CelularBlizzard/>}
        </section>

        </header>
    )
}   