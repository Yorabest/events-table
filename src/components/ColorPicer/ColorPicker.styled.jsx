import { styled } from "styled-components";

export const Container = styled.div`
padding: 10px;
`

export const Title = styled.h2`
line-height: 1.3;
`

export const Option = styled.button`
     display: inline-flex;
     width: 80px;
     height: 60px;
     margin: 8px;
     align-items: center;
     justify-content: center;
     background-color: ${({ bg }) => bg};
     translation: scale 250ms linear;
     border-radius: 10px;
     border: ${({current, idx}) => current === idx ? 'black 3px solid ' : 'none'} ;

     &:hover{
        transform: scale(1.1)
     }
`