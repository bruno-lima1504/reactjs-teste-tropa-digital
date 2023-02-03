import React from "react";
import CardImage from '../../assets/img-component.png';

import * as C from './styles'

export function Card(){
    return(
            <C.CardContainer>
                <C.Div>
                    <C.Imagem src= { CardImage } alt="imagem de fundo" ></C.Imagem>
                    <C.Span > <span><ion-icon name="calendar-clear-outline"></ion-icon></span> <p>2min atrás</p> </C.Span>                    
                </C.Div> 
                <C.CardTitle>Lorem Ipsum is simply dummy text of the printing and typesettin...</C.CardTitle>
                <C.Legenda>Lorem Ipsum is simply dummy text of the printing and typesettin.</C.Legenda>
            </C.CardContainer>
    )
}
