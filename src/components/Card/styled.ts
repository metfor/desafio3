import { prependOnceListener } from "process";
import styled from "styled-components";
export const Cards=styled.div`
width: 340px;
height: 423px;


background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
@media(max-width:1120px){
        width: 280px;
          
    }
`
export const CardColor=styled.div`
    width: 340px;
    height: 222px;
    background:${props=> props.color};
    @media(max-width:1120px){
        width: 280px;
        height: 222px;   
    }
    
`
export const Title =styled.h1`
    font-family: Merriweather;
    font-weight: 700;
    font-size: 1.5rem;
    line-height:1.875rem ;
    margin-left: 1.5rem;
    margin-top:1.5rem;
`
export const Sub=styled.p`
font-family: Lato;
font-size:1.125rem ;
line-height: 1.875rem;
font-weight: 400;
margin-left: 1.5rem;
margin-right: 1.5rem;
`