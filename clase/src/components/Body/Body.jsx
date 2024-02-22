import './Body.css'
import React, { useState } from "react"
import GameOverwatch from "../../Images/OverwatchDragon.jpg"
import DiabloIVBody from "../../Images/BodyDiabloIV.jpg"
import HearthstoneBody from "../../Images/HearthstoneBodyIV.jpg"
import DiabloIIBody from "../../Images/Diablo2Body.jpg"
import FlechaDer from "../../Images/Flecha.png"
import FlechaIzq from "../../Images/Flecha.png"

const dataImg = [
    {
        img:GameOverwatch,
        Tittle: "",
        Description: "",
        Button: "Mas información"
        
    },

    {
        img:DiabloIVBody,
        Tittle: "",
        Description: "",
        Button: "Mas información"
        
    },

    {
        img:HearthstoneBody,
        Tittle: "",
        Description: "",
        Button: "Mas información"
        
    },


    {
        img:DiabloIIBody,
        Tittle: "",
        Description: "",
        Button: "Mas información"
        
    },
]


export  function  Body () {
   
    const [current, setCurrent] = useState(0)

    const derSlide = () => {
        setCurrent(current === dataImg.length -1 ? 0 : current + 1)
    }

    const izqSlide = () => {
        setCurrent(current === dataImg.length -1 ? 0 : current - 1)
    }

return (
    <section className='carusel-Body'>
        <img className='flecha-Izquierda'onClick={izqSlide} src= {FlechaDer}alt='left arrow'/>
        <img className='flecha-Derecha' onClick={derSlide} src= {FlechaIzq} alt='right arrow'/>
        <img flechaDer></img>
        
        {
            dataImg.map((img,index) => {
                return current === index ? (
              <section key={index} className='Slide'>
                <img className='img-Carusel' src={img.img} alt="images"/>
                <h1 className='tittle-Carusel'>{img.Tittle}</h1>
                <h2 className='description-Carusel'>{img.Tittle}</h2>
                <button className='button-Carusel'>{img.Button}</button>
              </section>
                ) : null
            })}    
         </section>
)

}