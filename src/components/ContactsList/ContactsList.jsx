import { Button, Contact } from "./ContactsList.styled";
import { phone } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/slices";

export const ContactsList = ({contacts}) => {
    // const contacts = useSelector(phone)
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