import styled from "styled-components"

export const CardContainer = styled.div`
    background-color: #fff;
    width: 500px;    
    height: 228px;
    border-radius: 6px;
    `

export const Div = styled.div`
        position: relative;
        max-width: 100%;`   
    

export const Imagem = styled.img` 
        max-width: 100%;
        display: block;
        border-radius: 6px;
        margin: 15px 16px 16px 19px;
`

    
export const CardTitle = styled.h3`
        font-weight: 700;
        margin-left: 19px;
        font-size: 14px;
`  

export const Legenda = styled.p`
        margin-left: 19px;
        font-weight: 400;
        font-size: 12px;     
`
export const Span = styled.span`
    width: 102px;
    height: 27px;
    position: absolute;
    left: 350px;
    top: 25px;
    background-color: rgba(0, 0, 0, 0.5) ;
    color: #fff;    
    display: flex;
    justify-content: space-around;
    align-content: center;
    border-radius: 3px;


    p{  
        height: 16px;
        font-size: 11px;
        margin-top: 6px;
    }

    span {
        margin-top: 5px;
    }
`