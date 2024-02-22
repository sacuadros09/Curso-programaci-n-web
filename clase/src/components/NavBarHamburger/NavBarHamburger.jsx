import React from 'react'
import "./NavBarHamburger.css"
import {HamburguerNavData} from '../../data/Hamburguer'

export function HamburgerBlizzard () {
  return (
    <section className='nav-Hamburger'>
      {HamburguerNavData.map(({ img, Title, Subtitle}) => {
        return (
          <section  className='container-Hamburger'>
            <img className='img-Hamburger' src={img} alt='LogoCard'/>
            <section className='letter-Hamburger'>
            <h2 className='title-Hamburger'>{Title}</h2>      
            <h4 className='subtitle-Hamburger'>{Subtitle}</h4>
            </section>
          </section>
        )
      })}
    </section>
  )
}