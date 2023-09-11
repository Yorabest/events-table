
import { ContainerBox } from './Container.styled';

export const Container = ({title, children }) => {
    return <>
        
        <ContainerBox>
           {title &&  <h2>{title}</h2>}
            {children}
        </ContainerBox></>
}