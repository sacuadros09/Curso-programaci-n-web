import './Games.css'
import React from "react";

export const Games = () => {
    return(
       <section className='Games'>
        <section className="LeftGames">
        <h1>JUEGOS DESTACADOS</h1>
        </section>
        <section className='RightGames'>
      <button className='Pc'>PC</button>
      <button className='Consola'>CONSOLA</button>
      <button className='Movil'>MÓVIL</button>
      </section>
      </section>
     
        
    )    
}