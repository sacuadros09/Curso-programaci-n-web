import React from "react"
import "./NavBarStarcraft.css"
import {StarcraftNavData} from '../../data/StarcraftData'

export function StarcraftBlizzard () {
  return (
    <section className='nav-Starcraft'>
      {StarcraftNavData.map(({ img, Title, Subtitle}) => {
        return (
          <section  className='container-Starcraft'>
            <img className='img-Starcraft' src={img} alt='LogoCard'/>
            <section className='letter-Starcraft'>
            <h2 className='title-Starcraft'>{Title}</h2>      
            <h4 className='subtitle-Starcraft'>{Subtitle}</h4>
            </section>
          </section>
        )
      })}
    </section>
  )
}