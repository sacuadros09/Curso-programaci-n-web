import React from "react"
import  Header  from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Games } from "./components/Games/Games"
import { Catalogue } from "./components/Catalogue/Catalogue"
import { ButtonInfo } from "./components/ButtonInfo/ButtonInfo"
import { DownloadBattle } from "./components/DownloadBattle/DownloadBattle"
import { Contacts } from "./components/Contacts/Contacts"
import { Footer } from "./components/Footer/Footer"

export default function App(){
    return(
        <div>
        <Header/>
        <Body/>
        <Games/>
        <Catalogue/>
        <ButtonInfo/>
        <DownloadBattle/>
        <Contacts/>
        <Footer/>
        </div>
    
    )
    }