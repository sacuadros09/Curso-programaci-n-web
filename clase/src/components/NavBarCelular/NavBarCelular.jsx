import React from "react"
import "./NavBarCelular.css"
import {CelularNavData} from '../../data/CelularData'

export function CelularBlizzard () {
  return (
    <section className='nav-Celular'>
      {CelularNavData.map(({ Title,}) => {
        return (
          <section  className='container-Celular'>
            <h2 className='title-Celular'>{Title}</h2>      
            </section>
        )
      })}
    </section>
  )
}