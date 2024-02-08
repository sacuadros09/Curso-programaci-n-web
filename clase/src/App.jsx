import React from "react"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Games } from "./components/Games/Games"
import { Catalogue } from "./components/Catalogue/Catalogue"
import { ButtonInfo } from "./components/ButtonInfo/ButtonInfo"

export default function App(){
    return(
        <div>
        <Header/>
        <Body/>
        <Games/>
        <Catalogue/>
        <ButtonInfo/>
        </div>
    
    )
    }