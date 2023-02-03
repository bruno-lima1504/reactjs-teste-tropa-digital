import React, { useState } from "react";

import Logo from '../../assets/logo.png'
import { MenuButtom } from "../MenuButton";

import * as C from './styles'

export function Menu(){       
    const [ btnFirst, setBtnFirst] = useState(false);
    const [ btnReport, setBtnReport] = useState(false);
    const [ btnContacts, setBtnContacts] = useState(false);
    const [ btnFavorites, setBtnFavorites] = useState(false);

    function btnSelected(item){
        const clicked = item.type.toLowerCase()
            setBtnFirst(false);
            setBtnReport(false);
            setBtnContacts(false);
            setBtnFavorites(false);
               
        switch(clicked){
            case 'inicio':
                setBtnFirst(true);   
                break
            case 'relatórios' :                
                setBtnReport(true);
                break
            case 'contatos' :
                setBtnContacts(true);
                break
            case 'favoritos' :
                setBtnFavorites(true);
                break
            default:
            return    
        }        
    } 

    return (
        <C.MenuContainer> 
            <C.Logo src= { Logo } alt="logo"/> 
            <MenuButtom 
                type="Inicio" 
                icon="cellular" 
                tema={btnSelected}
                toggleTheme={btnFirst}
            />
            <MenuButtom 
                type="Relatórios" 
                icon="document-text" 
                tema={btnSelected}
                toggleTheme={btnReport}
            />
            <MenuButtom 
                type="Contatos" 
                icon="person" 
                tema={btnSelected}
                toggleTheme={btnContacts}
            />
            <MenuButtom 
                type="Favoritos" 
                icon="star" 
                tema={btnSelected}
                toggleTheme={btnFavorites}
            />                      
        </C.MenuContainer>
    )
}





