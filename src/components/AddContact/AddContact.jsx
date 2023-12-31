import { Component, useState } from "react";
import {Form, Button, Input} from './AddContact.styled.jsx'

export const AddContact = ({contacts, addNewContact}) => {
    const [thisName, setName] = useState('');
     const [number, setNumber] = useState('');

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
        addNewContact(thisName, number)

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

export class OldAddContact extends Component{
    state = {
        name: '',
        number: ''
    }

    handlerInputChange = (e) => {

        const { name, value } = e.currentTarget;
    
        this.setState({
            [name]: value,
            
        })

    }

    handlerSubmit = (e) => {
        e.preventDefault()
        
        if (!this.state.name || !this.state.number) {
            return
        }

         const chekd =  this.props.contacts.filter(({ name }) => {
            return name === this.state.name
        })

        console.log(chekd.length);

        if (chekd.length !== 0) {
            alert(`${this.state.name} is already in contacts`);
            return
        }
        this.props.addNewContact(this.state.name, this.state.number)

        this.setState({
            name: '',
            number:  ''
        })
    }


    render() {
        const { handlerSubmit, handlerInputChange } = this;
        const {name, number} = this.state
        return <>
            <Form onSubmit={handlerSubmit}>
                <label htmlFor="name">Name</label>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
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
}