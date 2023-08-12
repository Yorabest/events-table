import styled from 'styled-components';

const Event = styled.li`
display: flex;
flex-direction: column;
background-color: ${({theme, type})=>{
    switch (type) {
        case 'free':
            return theme.colors.free;
        case 'paid':
            return theme.colors.paid;
        case "vip":
            return theme.colors.vip;
        default:
            return theme.colors.eventBg
    }
}};
border: 3px solid;
border-color: ${({theme, type})=>{
    switch (type) {
        case 'free':
            return theme.colors.freeBorder;
        case 'paid':
            return theme.colors.paidBorder;
        case "vip":
            return theme.colors.vipBorder;
        default:
            return theme.colors.eventBorder
    }
}};
border-radius: 2px;
width: calc((100% - 20px * 8) / 3)
`
const EventsBoard = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
background-color:${({theme})=>theme.colors.mainBg};
border: 7px solid;
border-color: ${({theme})=>theme.colors.mainBorder};
border-radius: 2px;
padding: 20px;
justify-content: center`

const Title = styled.h3`
display: flex;
align-items: center;
background-color: ${({theme})=>theme.colors.mainBg};
border: 5px solid;
border-color: ${({theme})=>theme.colors.mainBorder};
border-radius: 2px;
padding: 10px;`

export {Event, EventsBoard, Title}