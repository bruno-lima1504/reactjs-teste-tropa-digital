import React, { useState } from "react";
import Logo from '../../assets/logo.png'
import FundoLogin from '../../assets/fundo-login.png'
import ImageForm from '../../assets/flutuante-login.png'
import { Link } from 'react-router-dom'

import * as C from './styles'

export function SignIn(){
    const[viewInput, setViewInput] = useState('password')

    function passwordVisible(){

        if(viewInput === 'password'){
            setViewInput('text')
            return
         }   
         setViewInput('password')    
        }

    return(
        <C.Background>            
            <C.Container>
                <C.FormContainer>
                    <C.Logo src= { Logo } alt='logotipo' />
                    <C.Title>Bem vindo ao Painel!</C.Title>
                    <C.Input placeholder='Insira seu e-mail' posit={false}/>

                    <div>
                    <C.Input placeholder='Insira sua senha' type={viewInput} posit={true}/>                
                    <C.BtnInput onClick={(e) => passwordVisible()}>
                        <ion-icon name="eye-off"></ion-icon>
                    </C.BtnInput> 
                    </div>   

                    <Link to="/Home">
                    <C.Button>Clique Aqui</C.Button> 
                    </Link>               
                </C.FormContainer>
                <C.ArtContainer>
                    <img src= { FundoLogin } alt="imagem de background"></img>                
                    <C.Image src= { ImageForm } alt="imagem de ilustrativa"></C.Image>        
                </C.ArtContainer>
            </C.Container>
        </C.Background>
    )
}