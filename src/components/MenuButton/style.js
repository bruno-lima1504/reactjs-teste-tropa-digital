import styled from "styled-components";

export const Menu = styled.ul`        
        justify-content: end;
        a{
            text-decoration: none;
        }
`
export const MenuText = styled.p`
        font-size: 14px;        
        font-weight: 600;
        margin-left: 10px;
`
export const Button = styled.button`
        height: 50px;        
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
        padding: 16px;
        margin-left: 59px;
        margin-bottom: 11px;               
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        margin-right: ${props => props.btnActive ? '0': '14px'};
        background-color: ${props => props.btnActive ? '#E5E5E5': '#2EAFB2'};
        width: ${props => props.btnActive ? '215px': '211px'};
        border-top-right-radius: ${props => props.btnActive ? '0px': '5px'};
        border-bottom-right-radius: ${props => props.btnActive ? '0px': '5px'};         
        p{
            color:${props => props.btnActive ? '#000' : '#FFF'};
        }
        ion-icon{
            color:#FF6C22;
        }              
        
`
