import React from "react"
import "./Catalogue.css"
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
import BattleNet from "../../Images/battle-net-svgrepo-com.svg"
import Apple from "../../Images/brand-apple-filled.svg"
import GooglePlay from "../../Images/brand-google-play.svg"
import Xbox from "../../Images/brand-xbox.svg"
import PlayStation from "../../Images/device-gamepad-2.svg"
import Steam from "../../Images/steam-svgrepo-com.svg"
import Switch from "../../Images/device-nintendo.svg"


const CatalogueCard = [
{img: Wow1,Title:"World of Warcraft: The War Within",Description:"MMORPG",img2: BattleNet},
{img: Wow2,Title:"World of Warcraft:Cataclysm Classic",Description:"MMORPG",img2:BattleNet},
{img: WarcraftRumble,Title:"Warcraft Rumble",Description:"ACCIÓN ESTRATÉGIA",img3:Apple,img4:GooglePlay},
{img: DiabloIV,Title:"DiabloIV",Description:"ROL Y ACCIÓN",img2: BattleNet,img5:Xbox,img6:PlayStation,img7:Steam},
{img: Wow3,Title:"World of Warcraft",Description:"MMORPG",img2:BattleNet},
{img: Overwatch2,Title:"Overwatch2  ",Description:"ACCIÓN POR EQUIPOS",img2: BattleNet,img5:Xbox,img6:PlayStation,img8:Switch,img7:Steam},
{img: Hearthstone,Title:"World of Warcraft",Description:"MMORPG",img2: BattleNet,img3:Apple,img4:GooglePlay},
{img: DiabloInmortal,Title:"Diablo immortal",Description:"ROL Y ACCIÓN",img2:BattleNet,img3:Apple,img4:GooglePlay},
{img: DiabloResurected,Title:"Diablo II: Resurrected",Description:"ROL Y ACCIÓN",img2: BattleNet,img5:Xbox,img6: PlayStation,img8:Switch},
{img: WarcraftIIIReforged,Title:"Warcraft III: Reforged",Description:"ESTRATEGIA EN TIEMPO REAL",img2: BattleNet},
]

export function Catalogue (){
    return( 
        <section className="CardGames">
        {CatalogueCard.map(function(Catalogue,index){
        return(  
      <section className ="ContainerCard" key={Catalogue.Title}>
        <img className="ImgCard1"style={{width:"208", height:"277"}}src ={Catalogue.img} alt="CardGame"/>
        <h1 className="TitleCard">{Catalogue.Title}</h1>
        <h3 className="DescriptionCard"> {Catalogue.Description}</h3>

        <section className="Logitos">
        {(index === 0) && <img className="ImgCard0"  style={{width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}

        {(index === 1) && <img className="ImgCard2"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}

        {(index === 2) && <img className="ImgCard3"  style={{ width: "24px", height: "24px" }} src={Catalogue.img3} alt="IconGame" />}
        {(index === 2) && <img className="ImgCard3"  style={{ width: "24px", height: "24px" }} src={Catalogue.img4} alt="IconGame" />}

        {(index === 3) && <img className="ImgCard4"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}
        {(index === 3) && <img className="ImgCard4"  style={{ width: "24px", height: "24px" }} src={Catalogue.img5} alt="IconGame" />}
        {(index === 3) && <img className="ImgCard4"  style={{ width: "24px", height: "24px" }} src={Catalogue.img6} alt="IconGame" />}
        {(index === 3) && <img className="ImgCard4"  style={{ width: "24px", height: "24px" }} src={Catalogue.img7} alt="IconGame" />}

        {(index === 4) && <img className="ImgCard5"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}

        {(index === 5) && <img className="ImgCard6"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}
        {(index === 5) && <img className="ImgCard6"  style={{ width: "24px", height: "24px" }} src={Catalogue.img5} alt="IconGame" />}
        {(index === 5) && <img className="ImgCard6"  style={{ width: "24px", height: "24px" }} src={Catalogue.img6} alt="IconGame" />}
        {(index === 5) && <img className="ImgCard6"  style={{ width: "24px", height: "24px" }} src={Catalogue.img8} alt="IconGame" />}
        {(index === 5) && <img className="ImgCard6"  style={{ width: "24px", height: "24px" }} src={Catalogue.img7} alt="IconGame" />}

        {(index === 6) && <img className="ImgCard7"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}
        {(index === 6) && <img className="ImgCard7"  style={{ width: "24px", height: "24px" }} src={Catalogue.img3} alt="IconGame" />}
        {(index === 6) && <img className="ImgCard7"  style={{ width: "24px", height: "24px" }} src={Catalogue.img4} alt="IconGame" />}

        {(index === 7) && <img className="ImgCard8"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}
        {(index === 7) && <img className="ImgCard8"  style={{ width: "24px", height: "24px" }} src={Catalogue.img3} alt="IconGame" />}
        {(index === 7) && <img className="ImgCard8"  style={{ width: "24px", height: "24px" }} src={Catalogue.img4} alt="IconGame" />}
        
        {(index === 8) && <img className="ImgCard9"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}
        {(index === 8) && <img className="ImgCard9"  style={{ width: "24px", height: "24px" }} src={Catalogue.img5} alt="IconGame" />}
        {(index === 8) && <img className="ImgCard9"  style={{ width: "24px", height: "24px" }} src={Catalogue.img6} alt="IconGame" />}
        {(index === 8) && <img className="ImgCard9"  style={{ width: "24px", height: "24px" }} src={Catalogue.img8} alt="IconGame" />}

        {(index === 9) && <img className="ImgCard10"  style={{ width: "24px", height: "24px" }} src={Catalogue.img2} alt="IconGame" />}
        </section>
     
       </section> 
    )
    })}
    </section>
)
        }