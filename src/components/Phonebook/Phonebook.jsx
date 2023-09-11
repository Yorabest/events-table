import { Component } from "react";
import { ContactsList } from "components/ContactsList/ContactsList";
import { AddContact } from 'components/AddContact/AddContact'
import { Container } from "components/Container/Container";
import { nanoid } from "nanoid";
import { FilterContacts } from "components/FilterContacts/FilterContacts";
import {Main} from './Phonebook.styled'



export class Phonebook extends Component{
    state = {
        contacts: this.props.contactsInfo,
        filter: ''
    }


    deleteContact = (currentId) => {
       const update =  this.state.contacts.filter(({ id }) => {
            const res = id === currentId
            return !res
        })

        this.setState({
                contacts: update
            }
        )
    }

    addNewContact = (name,number) => {
        const newContact = {
            id: nanoid(),
            name,
            number
        }

        this.setState((prev) => {
            return {
                contacts: [newContact, ...prev.contacts]
            }
        })

    }

    addFilter = (filter) => {
        
        this.setState({
            filter: filter
        })

    }

    filterCon = (query) => {
        
       const res = this.state.contacts.filter(({name}) => {
            return name.toLowerCase().indexOf(query.toLowerCase()) > -1
       })
        return res
    }

    render() {
        const { addNewContact, addFilter, filterCon, deleteContact } = this;
        const {filter, contacts} = this.state
        return <Main>
            <Container title='Phonebook'>
                <AddContact addNewContact={addNewContact} contacts={contacts} />
            </Container>
            <Container title='Contacts'>
                <FilterContacts addFilter={addFilter } />

                <ContactsList contacts={filterCon(filter)} handlerDelete={deleteContact} />
            </Container>
        </Main>
    }

    
}