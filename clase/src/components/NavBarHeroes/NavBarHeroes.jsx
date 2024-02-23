import React from "react"
import "./NavBarHeroes.css"
import {HeroesNavData } from '../../data/HeroesData'

export function HeroesBlizzard () {
  return (
    <section className='nav-Heroes'>
      {HeroesNavData.map(({ img, Title, Subtitle}) => {
        return (
          <section  className='container-Heroes'>
            <img className='img-Heroes' src={img} alt='LogoCard'/>
            <section className='letter-Heroes'>
            <h2 className='title-Heroes'>{Title}</h2>      
            <h4 className='subtitle-Heroes'>{Subtitle}</h4>
            </section>
          </section>
        )
      })}
    </section>
  )
}