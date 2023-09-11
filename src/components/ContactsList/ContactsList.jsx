import { Button, Contact} from "./ContactsList.styled";

export const ContactsList = ({contacts, handlerDelete}) => {
    return <ul>
        {contacts.map(({ id, name, number })=>{
            return <li key={id}>
                <Contact>{name}: {number} </Contact>
                <Button onClick={()=>{handlerDelete(id)}}>Delete</Button>      
            </li>
        })}

    </ul>
}