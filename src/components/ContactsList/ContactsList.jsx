import { Button, Contact } from "./ContactsList.styled";
import { useDispatch} from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactsList = ({contacts}) => {
    const dispatch = useDispatch()

    const handlerDelete = (id) => {
        dispatch(deleteContact(id))
    }

    return <ul>
        {contacts.map(({ id, name, number })=>{
            return <li key={id}>
                <Contact>{name}: {number} </Contact>
                <Button onClick={()=>{handlerDelete(id)}}>Delete</Button>      
            </li>
        })}

    </ul>
}