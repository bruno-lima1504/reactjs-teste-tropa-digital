import React from "react"
import * as C from './style'

export function MenuButtom({ type,icon, tema, toggleTheme }){
    return(
                <C.Button onClick={(e) => tema({type})} btnActive={toggleTheme}> 
                    <ion-icon name={icon}></ion-icon>
                    <C.MenuText>{type}</C.MenuText>
                </C.Button>
    )
}


               