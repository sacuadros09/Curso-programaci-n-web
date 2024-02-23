import React from "react"
import "./NavBarOverwatch.css"
import {OverwatchNavData} from '../../data/OverwatchData'

export function OverwatchBlizzard () {
  return (
    <section className='nav-Overwatch'>
      {OverwatchNavData.map(({ img, Title, Subtitle}) => {
        return (
          <section  className='container-Overwatch'>
            <img className='img-Overwatch' src={img} alt='LogoCard'/>
            <section className='letter-Overwatch'>
            <h2 className='title-Overwatch'>{Title}</h2>      
            <h4 className='subtitle-Overwatch'>{Subtitle}</h4>
            </section>
          </section>
        )
      })}
    </section>
  )
}