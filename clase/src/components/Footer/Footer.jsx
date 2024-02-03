import React from "react"
import Wow1 from "../../Images/Wow1.png"
import Wow2 from "../../Images/Wow2.jpg"
import WarcraftRumble from "../../Images/WarcraftRumble1.jpg"
import DiabloIV from "../../Images/DiabloIV.jpg"
import Wow3 from "../../Images/Wow3.jpg"
import Overwatch2 from "../../Images/Overwatch2.jpg"
import Hearthstone from "../../Images/HearthStone.png"
import DiabloInmortal from "../../Images/DiabloInmortal.jpg"
import DiabloResurected from "../../Images/DiabloResurected.jpeg"
import WarcraftIIIReforged from "../../Images/WarcraftIIIReforged.png"
import IconoBattleNet from "../../Images/IconoBattleNet.png"
import LogoXbox from "../../Images/LogoXbox.png"
import AppleLogo from "../../Images/Apple Logo.png"
import GooglePlay from "../../Images/Google play.png"
import LogoSteam from "../../Images/SteamLogo.jpg"
import LogoPlaystation from "../../Images/LogoPlaystation.png"

export const Footer = () => {
    return(
        <footer>
        <nav>

        <h1>Juegos Destacados</h1>

        <button>PC</button>
        <button>CONSOLA</button>
        <button>MÓVIL</button>

        <img src={Wow1} alt="Wow1"></img>
         <h1>World of Warcraft: The War Within</h1>
         <p>MMORPG</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>

         <img src={Wow2} alt="Wow2"></img>
         <h1>World of Warcraft:Cataclysm Classic</h1>
         <p>MMORPG</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>

         <img src={WarcraftRumble} alt="WarcraftRumble"></img>
         <h1>Warcraft Rumble</h1>
         <p>ACCIÓN ESTRATÉGIA PARA JUEGOS MÓVILES</p>
         <img src={AppleLogo} alt="AppleLogo"></img>
         <img src={GooglePlay} alt="GooglePlay"></img>
         

         <img src={DiabloIV} alt="DiabloIV"></img>
         <h1>DiabloIV</h1>
         <p>ROL Y ACCIÓN</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>
         <img src={LogoXbox} alt="LogoXbox"></img>
         <img src={LogoPlaystation} alt="LogoPlay"></img>
         <img src={LogoSteam} alt="LogoSteam"></img>

         <img src={Wow3} alt="Wow3"></img>
         <h1>World of Warcraft</h1>
         <p>MMORPG</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>

         <img src={Overwatch2} alt="Overwatch2"></img>
         <h1>Overwatch 2</h1>
         <p>ACCIÓN POR EQUIPOS</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>
         <img src={LogoXbox} alt="LogoXbox"></img>
         <img src={LogoPlaystation} alt="LogoPlay"></img>
         <img src={LogoSteam} alt="LogoSteam"></img>

         <img src={Hearthstone} alt="Hearthstone"></img>
         <h1>Hearthstone</h1>
         <p>JUEGO DE CARTAS DE ESTRATEGIA</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>
         <img src={AppleLogo} alt="AppleLogo"></img>
         <img src={GooglePlay} alt="GooglePlay"></img>

         <img src={DiabloInmortal} alt="DiabloInmortal"></img>
         <h1>Diablo inmortal</h1>
         <p>ROL Y ACCIÓN</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>
         <img src={AppleLogo} alt="AppleLogo"></img>
         <img src={GooglePlay} alt="GooglePlay"></img>

         <img src={DiabloResurected} alt="DiabloResurected"></img>
         <h1>Diablo II: Resurrected</h1>
         <p>ROL Y ACCIÓN</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>
         <img src={LogoXbox} alt="LogoXbox"></img>
         <img src={LogoPlaystation} alt="LogoPlay"></img>
         <img src={LogoSteam} alt="LogoSteam"></img>
         

         <img src={WarcraftIIIReforged} alt="WarcraftIIIReforged"></img>
         <h1> Warcraft III: Reforged</h1>
         <p>ESTRATEGIA EN TIEMPO REAL</p>
         <img src={IconoBattleNet} alt="IconoBattleNet"></img>

        </nav>
        </footer>
    )
}