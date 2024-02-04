import React from "react"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Games } from "./components/Games/Games"
import { Footer } from "./components/Footer/Footer"
import { ButtonInfo } from "./components/ButtonInfo/ButtonInfo"

export default function App(){
    return(
        <div>
        <Header/>
        <Body/>
        <Games/>
        <Footer/>
        <ButtonInfo/>
        </div>
    
    )
    }