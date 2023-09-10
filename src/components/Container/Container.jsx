
import { ContainerBox } from './Container.styled';

export const Container = ({title, children }) => {
    return <>
        <h2>{title}</h2>
        <ContainerBox>{children}</ContainerBox></>
}