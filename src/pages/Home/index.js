import React from "react";
import { Card } from "../../components/Card";
import { Menu } from "../../components/Menu";
import * as C from './styles'

export function Home(){
    return(
        <C.Background>
            <Menu/>
            <C.Container>
            <header>
                <C.HomeTilte>Olá Usuário</C.HomeTilte>
                <hr />
            </header>
            <C.Content>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </C.Content>
        </C.Container>
        </C.Background>
    )
}