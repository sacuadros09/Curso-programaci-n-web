import React from "react"
import "./NavBarDiablo.css"
import {DiabloNavData} from '../../data/DiabloData'

export function DiabloBlizzard () {
  return (
    <section className='nav-Diablo'>
      {DiabloNavData.map(({ img, Title, Subtitle}) => {
        return (
          <section  className='container-Diablo'>
            <img className='img-Diablo' src={img} alt='LogoCard'/>
            <section className='letter-Diablo'>
            <h2 className='title-Diablo'>{Title}</h2>      
            <h4 className='subtitle-Diablo'>{Subtitle}</h4>
            </section>
          </section>
        )
      })}
    </section>
  )
}