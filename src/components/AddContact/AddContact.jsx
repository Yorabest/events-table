import {  useState } from "react";
import { Form, Button, Input } from './AddContact.styled.jsx'
import { addNewContact } from "../../redux/operations.jsx";
import { selectContacts } from "../../redux/selectors.js";
import { useDispatch, useSelector } from "react-redux";

export const AddContact = () => {
    const [thisName, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch()
    const contacts = useSelector(selectContacts)

    const handlerInputChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                break;
         }
    }

    const handlerSubmit = (e) => {
        e.preventDefault() 
        if (!thisName || !number) {
            return
        }

         const chekd =  contacts.filter(({ name }) => {
            return name === thisName
        })

        if (chekd.length !== 0) {
            alert(`${thisName} is already in contacts`);
            return
        }
        dispatch(addNewContact({
            name: thisName,
            number
        }))

        setName('')
        setNumber('')
    }

     return <>
            <Form onSubmit={handlerSubmit}>
                <label htmlFor="name">Name</label>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    value={thisName}
                    onChange={handlerInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor="tel">Number</label>

                <Input
                    id="tel"
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handlerInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
/>
                <Button type="submit">Add contact</Button>
            </Form></>
}