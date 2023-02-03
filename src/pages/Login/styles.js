import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    background-color: #FF6C22;
    width: 100%;
    height: 100vh;    
`

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    width: 857px;        
    height: 512px;
    margin: auto;
    border-radius: 5px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;    
    width: 468px;
`

export const Logo = styled.img`
    margin-top: 70px;
    margin-left: 84px;
    margin-bottom: 44px;
    max-width: 190px;
    max-height: 44px;
`

export const Title = styled.h2`
    font-size: 25px;
    margin-left: 59px;
    color: #00000070;
`

export const Input = styled.input`
        width: 314px;        
        height: 44px;
        margin: 6px 6px 6px 57px; 
        padding: 12px;
        border: solid 1px rgb(0, 0, 0, 0.1);
        border-radius: 5px;
        position: ${props => props.abc ? '' : 'relative'};
`
export const BtnInput = styled.button`
    position: absolute;
    width: 38px;
    height: 
    38px;
    margin-left: -47px;
    margin-top: 9px;
    font-size: 18px;
    color: #969a92;
    border: none;
    background-color: #FFF;
    border-radius: 5px;
    :active{
        background-color: #121212;
        color: #FFF;
    }
`

export const Button = styled.button`
        width: 151px;
        height: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
        padding: 8px;
        margin-top: px;
        margin-left: 59px;
        background-color: #2EAFB2;
        border: none;
        border-radius: 5px;
        cursor: pointer;
`

export const ArtContainer = styled.div`
    position: relative;
`

export const Image = styled.img`
    position: absolute;
    left: -70px;
    top: 99px;
`