// Se importa el estilos CSS asociados al componente
import './Body.css'
// Se importa la librería React,useState y las imagenes asociados al componente
import React, { useState } from "react"
import GameOverwatch from "../../Images/OverwatchDragon.jpg"
import DiabloIVBody from "../../Images/BodyDiabloIV.jpg"
import HearthstoneBody from "../../Images/HearthstoneBodyIV.jpg"
import DiabloIIBody from "../../Images/Diablo2Body.jpg"
import FlechaDer from "../../Images/Flecha.png"
import FlechaIzq from "../../Images/Flecha.png"

// Datos de las imágenes del carrusel
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

// Componente funcional para el carrusel de imágenes
export  function  Body () {
   // Estado para seguir la imagen actual en el carrusel
    const [current, setCurrent] = useState(0)

// Función para pasar a la siguiente imagen del carrusel
    const derSlide = () => {
        setCurrent(current === dataImg.length -1 ? 0 : current + 1)
    }
    
 // Función para retroceder a la imagen anterior del carrusel
    const izqSlide = () => {
        setCurrent(current === dataImg.length -1 ? 0 : current - 1)
    }
 // Renderizado del componente
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