    import React, {useState} from "react";
    import { Title } from "./Title/Title";
    import Barcelona from "../../Images/Barcelona.png"
    import RealMadrid from "../../Images/Real Madrid.png"
    import "./Header.css"

    export const Header = () =>{
        return(

        <header>
        <section className="futbol">
        <img className= "barcelona-logo" src={Barcelona} alt="BarcelonaLogo"></img>
            <h2 className="equipos">Fc Barcelona vs Real Madrid</h2>
            <img className= "real-logo" src={RealMadrid} alt="RealMadridLogo"></img>
        </section>
        
        
        </header>





        )
    }