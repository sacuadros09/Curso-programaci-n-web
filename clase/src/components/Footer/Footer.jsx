import './Footer.css'
import React from "react"
import Wow1 from "../../Images/Wow1.png"
import Wow2 from "../../Images/Wow2.jpg"
import WarcraftRumble from "../../Images/WarcraftRumble1.jpg"
import DiabloIV from "../../Images/DiabloIV.jpg"
import Wow3 from "../../Images/Wow3.jpg"
import Overwatch2 from "../../Images/Overwatch2.jpg"
import Hearthstone from "../../Images/HearthStone.png"
import DiabloInmortal from "../../Images/DiabloInmortal.jpg"
import DiabloResurected from "../../Images/DiabloResurected.jpeg"   
import WarcraftIIIReforged from "../../Images/WarcraftIIIReforged.png"



export const Footer = () => {
    return(
        <footer>
        <section className='Main'>
        <section className='TopGame'>
        <img className = "Wow1"src={Wow1} alt="Wowimg"></img>
         <h1>World of Warcraft: The War Within</h1>
         <h3>MMORPG</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>

         <img className = "Wow2"src={Wow2} alt="Wowimg"></img>
         <h1>World of Warcraft:Cataclysm Classic</h1>
         <h3>MMORPG</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>

         <img className = "WarcrafRumble"src={WarcraftRumble} alt="WarcraftRumbleimg"></img>
         <h1>Warcraft Rumble</h1>
         <h3>ACCIÓN ESTRATÉGIA PARA JUEGOS MÓVILES</h3>
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" /><path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg>
         <svg xmlns="http://www.w3.org/20svg00/svg" class="icon icon-tabler icon-tabler-brand-google-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" /><path d="M15 9l-10.5 11.5" /><path d="M4.5 3.5l10.5 11.5" /></svg>
         

         <img  className = "DiabloIV"src={DiabloIV} alt="DiabloIVimg"></img>
         <h1>DiabloIV</h1>
         <h3>ROL Y ACCIÓN</h3>
         <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-xbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" /><path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" /></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 48 48" part="icon blz-icon"><path fill-rule="evenodd" d="M28.47 14.31v10.609c4.464 2.16 7.982 0 7.982-5.706 0-5.826-2.06-8.421-8.126-10.51-2.392-.794-6.824-2.14-9.878-2.703v31.684l7.175 2.272V13.391c0-1.25.559-2.084 1.453-1.797 1.166.324 1.394 1.478 1.394 2.715m14.235 13.947c-3.002-1.13-6.824-1.518-9.942-1.178-3.123.34-5.343 1.126-5.343 1.126l-.439.144v4.316l7.666-2.703c1.318-.475 3.23-.575 4.3-.224 1.055.343.855 1.002-.446 1.486l-11.524 4.1v4.149l15.652-5.622s2.105-.783 2.975-1.86c.867-1.09.483-2.656-2.899-3.734M5.3 34.889c-3.466-.966-4.045-3.01-2.464-4.189 1.462-1.078 3.95-1.888 3.95-1.888l10.27-3.662v4.169l-7.392 2.647c-1.31.471-1.505 1.13-.45 1.474 1.073.359 2.978.263 4.288-.22l3.553-1.282v3.722l-.069.01c-.21.034-.437.07-.645.105-3.542.592-7.316.348-11.041-.886" clip-rule="evenodd"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="m17.28 33.312-2.211-.913a3.8 3.8 0 0 0 1.97 1.874 3.83 3.83 0 0 0 5-2.06 3.8 3.8 0 0 0 .005-2.925 3.8 3.8 0 0 0-2.064-2.075 3.8 3.8 0 0 0-2.819-.042l2.284.944a2.815 2.815 0 1 1-2.165 5.197M34.4 19.36a4.53 4.53 0 0 0-4.523-4.522 4.53 4.53 0 0 0-4.523 4.523 4.53 4.53 0 0 0 4.523 4.522 4.53 4.53 0 0 0 4.523-4.522m-7.913-.007a3.398 3.398 0 1 1 6.795 0 3.398 3.398 0 0 1-6.795 0"></path><path stroke="none" d="M23.938 6C14.482 6 6.736 13.29 6 22.557l9.648 3.988a5.06 5.06 0 0 1 3.151-.878l4.29-6.218v-.088a6.796 6.796 0 0 1 6.789-6.789 6.796 6.796 0 0 1 6.788 6.789 6.796 6.796 0 0 1-6.788 6.788q-.078.001-.154-.004l-6.12 4.367q.007.12.007.24a5.1 5.1 0 0 1-5.096 5.096 5.1 5.1 0 0 1-4.995-4.092l-6.9-2.85C8.756 36.46 15.698 42 23.938 42c9.941 0 18-8.06 18-18 0-9.941-8.059-18-18-18"></path></svg>

         <img className= "Wow3"src={Wow3} alt="Wowimg"></img>
         <h1>World of Warcraft</h1>
         <h3>MMORPG</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         </section>
         
         <section className='BotGames'>
        
         <img className="Overwatch"src={Overwatch2} alt="Overwatch2img"></img>
         <h1>Overwatch 2</h1>
         <h3>ACCIÓN POR EQUIPOS</h3>
         <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-xbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" /><path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" /></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 48 48" part="icon blz-icon"><path fill-rule="evenodd" d="M28.47 14.31v10.609c4.464 2.16 7.982 0 7.982-5.706 0-5.826-2.06-8.421-8.126-10.51-2.392-.794-6.824-2.14-9.878-2.703v31.684l7.175 2.272V13.391c0-1.25.559-2.084 1.453-1.797 1.166.324 1.394 1.478 1.394 2.715m14.235 13.947c-3.002-1.13-6.824-1.518-9.942-1.178-3.123.34-5.343 1.126-5.343 1.126l-.439.144v4.316l7.666-2.703c1.318-.475 3.23-.575 4.3-.224 1.055.343.855 1.002-.446 1.486l-11.524 4.1v4.149l15.652-5.622s2.105-.783 2.975-1.86c.867-1.09.483-2.656-2.899-3.734M5.3 34.889c-3.466-.966-4.045-3.01-2.464-4.189 1.462-1.078 3.95-1.888 3.95-1.888l10.27-3.662v4.169l-7.392 2.647c-1.31.471-1.505 1.13-.45 1.474 1.073.359 2.978.263 4.288-.22l3.553-1.282v3.722l-.069.01c-.21.034-.437.07-.645.105-3.542.592-7.316.348-11.041-.886" clip-rule="evenodd"></path></svg>
         <svg className="Switch" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-nintendo" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" /><path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" /><circle cx="17.5" cy="15.5" r="1" fill="currentColor" /><circle cx="6.5" cy="8.5" r="1" fill="currentColor" /></svg>
         <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="m17.28 33.312-2.211-.913a3.8 3.8 0 0 0 1.97 1.874 3.83 3.83 0 0 0 5-2.06 3.8 3.8 0 0 0 .005-2.925 3.8 3.8 0 0 0-2.064-2.075 3.8 3.8 0 0 0-2.819-.042l2.284.944a2.815 2.815 0 1 1-2.165 5.197M34.4 19.36a4.53 4.53 0 0 0-4.523-4.522 4.53 4.53 0 0 0-4.523 4.523 4.53 4.53 0 0 0 4.523 4.522 4.53 4.53 0 0 0 4.523-4.522m-7.913-.007a3.398 3.398 0 1 1 6.795 0 3.398 3.398 0 0 1-6.795 0"></path><path stroke="none" d="M23.938 6C14.482 6 6.736 13.29 6 22.557l9.648 3.988a5.06 5.06 0 0 1 3.151-.878l4.29-6.218v-.088a6.796 6.796 0 0 1 6.789-6.789 6.796 6.796 0 0 1 6.788 6.789 6.796 6.796 0 0 1-6.788 6.788q-.078.001-.154-.004l-6.12 4.367q.007.12.007.24a5.1 5.1 0 0 1-5.096 5.096 5.1 5.1 0 0 1-4.995-4.092l-6.9-2.85C8.756 36.46 15.698 42 23.938 42c9.941 0 18-8.06 18-18 0-9.941-8.059-18-18-18"></path></svg>

         <img className= "Hearthstone"src={Hearthstone} alt="Hearthstoneimg"></img>
         <h1>Hearthstone</h1>
         <h3>JUEGO DE CARTAS DE ESTRATEGIA</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         <svg  className= "Apple"xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" /><path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg>
         <svg className="GooglePlay" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" /><path d="M15 9l-10.5 11.5" /><path d="M4.5 3.5l10.5 11.5" /></svg>
         
         <img className="DiabloInmortal"src={DiabloInmortal} alt="DiabloInmortalimg"></img>
         <h1>Diablo inmortal</h1>
         <h3>ROL Y ACCIÓN</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         <svg  className= "Apple"xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" /><path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg>
         <svg className="GooglePlay" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" /><path d="M15 9l-10.5 11.5" /><path d="M4.5 3.5l10.5 11.5" /></svg>

         <img className='DiabloResurected' src={DiabloResurected} alt="DiabloResurectedimg"></img>
         <h1>Diablo II: Resurrected</h1>
         <h3>ROL Y ACCIÓN</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         <svg className="Xbox"xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-xbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" /><path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" /></svg>
         <svg className= "PlayStation"xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 48 48" part="icon blz-icon"><path fill-rule="evenodd" d="M28.47 14.31v10.609c4.464 2.16 7.982 0 7.982-5.706 0-5.826-2.06-8.421-8.126-10.51-2.392-.794-6.824-2.14-9.878-2.703v31.684l7.175 2.272V13.391c0-1.25.559-2.084 1.453-1.797 1.166.324 1.394 1.478 1.394 2.715m14.235 13.947c-3.002-1.13-6.824-1.518-9.942-1.178-3.123.34-5.343 1.126-5.343 1.126l-.439.144v4.316l7.666-2.703c1.318-.475 3.23-.575 4.3-.224 1.055.343.855 1.002-.446 1.486l-11.524 4.1v4.149l15.652-5.622s2.105-.783 2.975-1.86c.867-1.09.483-2.656-2.899-3.734M5.3 34.889c-3.466-.966-4.045-3.01-2.464-4.189 1.462-1.078 3.95-1.888 3.95-1.888l10.27-3.662v4.169l-7.392 2.647c-1.31.471-1.505 1.13-.45 1.474 1.073.359 2.978.263 4.288-.22l3.553-1.282v3.722l-.069.01c-.21.034-.437.07-.645.105-3.542.592-7.316.348-11.041-.886" clip-rule="evenodd"></path></svg>
         <svg className= "Steam"xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="m17.28 33.312-2.211-.913a3.8 3.8 0 0 0 1.97 1.874 3.83 3.83 0 0 0 5-2.06 3.8 3.8 0 0 0 .005-2.925 3.8 3.8 0 0 0-2.064-2.075 3.8 3.8 0 0 0-2.819-.042l2.284.944a2.815 2.815 0 1 1-2.165 5.197M34.4 19.36a4.53 4.53 0 0 0-4.523-4.522 4.53 4.53 0 0 0-4.523 4.523 4.53 4.53 0 0 0 4.523 4.522 4.53 4.53 0 0 0 4.523-4.522m-7.913-.007a3.398 3.398 0 1 1 6.795 0 3.398 3.398 0 0 1-6.795 0"></path><path stroke="none" d="M23.938 6C14.482 6 6.736 13.29 6 22.557l9.648 3.988a5.06 5.06 0 0 1 3.151-.878l4.29-6.218v-.088a6.796 6.796 0 0 1 6.789-6.789 6.796 6.796 0 0 1 6.788 6.789 6.796 6.796 0 0 1-6.788 6.788q-.078.001-.154-.004l-6.12 4.367q.007.12.007.24a5.1 5.1 0 0 1-5.096 5.096 5.1 5.1 0 0 1-4.995-4.092l-6.9-2.85C8.756 36.46 15.698 42 23.938 42c9.941 0 18-8.06 18-18 0-9.941-8.059-18-18-18"></path></svg>
         

         <img className = "WarcraftIIIReforged"src={WarcraftIIIReforged} alt="WarcraftIIIReforgedimg"></img>
         <h1> Warcraft III: Reforged</h1>
         <h3>ESTRATEGIA EN TIEMPO REAL</h3>
         <svg className="BattleNet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 48 48" part="icon blz-icon"><path stroke="none" d="M38.016 18.29c1.23-3.787 1.462-7.242.623-9.859l-.024-.073c-.05-.142-.175-.442-.334-.442-.12 0-.122.201-.115.303l.007.059c.267 2.337-.448 5.671-1.884 9.162-2.947-1.338-6.487-2.407-10.413-3.037-3.529-.567-6.906-.692-9.97-.442.364-2.41 1.264-4.086 2.74-4.44 2.033-.486 4.25.851 6.364 3.284q.547.075 1.097.163 1.564.25 3.072.596c-3.854-7.249-9.023-11.312-12.954-9.812-2.992 1.14-4.52 5.256-4.338 10.788-3.896.829-7.003 2.355-8.85 4.39l-.051.057c-.098.115-.296.373-.216.51.06.105.235.006.32-.051l.047-.036c1.89-1.4 5.135-2.448 8.877-2.949.315 3.22 1.16 6.82 2.576 10.536 1.274 3.34 2.854 6.327 4.603 8.855-2.27.89-4.17.948-5.215-.154-1.438-1.516-1.39-4.104-.339-7.152q-.21-.51-.408-1.032a48 48 0 0 1-1.019-2.957c-4.352 6.962-5.285 13.47-2.021 16.125 2.483 2.02 6.812 1.286 11.512-1.638 2.666 2.96 5.541 4.888 8.227 5.47l.075.016c.148.027.47.069.55-.069.06-.104-.113-.206-.205-.251l-.054-.023c-2.158-.937-4.688-3.223-6.993-6.213 2.632-1.883 5.327-4.414 7.836-7.499 2.256-2.773 4.053-5.635 5.368-8.414 1.905 1.52 2.906 3.138 2.474 4.594-.594 2.003-2.86 3.255-6.024 3.869q-.339.436-.69.869-1 1.23-2.052 2.361c8.205.288 14.307-2.158 14.975-6.312.508-3.16-2.293-6.543-7.174-9.151m-7.127 8.286c-2.893 3.557-6.5 6.586-9.707 8.337a36.3 36.3 0 0 1-3.091-6.183c-1.634-4.285-2.454-8.922-2.366-12.575 2.28-.076 4.635.05 6.9.414 4.527.727 8.953 2.336 12.073 4.239a36.3 36.3 0 0 1-3.809 5.768"></path></svg>
         </section>
         </section>
        </footer>
    )
}