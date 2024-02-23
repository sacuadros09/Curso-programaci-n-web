import React from "react"
import "./NavBarInformacion.css"
import {InformacionNavData } from '../../data/InformacionData'

export function InformacionBlizzard () {
  return (
    <section className='nav-Informacion'>
      {InformacionNavData.map(({ img, Title,}) => {
        return (
          <section  className='container-Informacion'>
            <img className='img-Informacion' src={img} alt='LogoCard'/>
            <section className='letter-Informacion'>
            <h2 className='title-Informacion'>{Title}</h2>      
            </section>
          </section>
        )
      })}
    </section>
  )
}