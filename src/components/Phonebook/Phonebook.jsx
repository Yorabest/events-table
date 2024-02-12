import { ContactsList } from "components/ContactsList/ContactsList";
import { AddContact } from 'components/AddContact/AddContact'
import { Container } from "components/Container/Container";
import { FilterContacts } from "components/FilterContacts/FilterContacts";
import { Main } from './Phonebook.styled'
import { selectFilteredContacts } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

export const Phonebook = () => {
    // const currentFilter = useSelector(selectFilter)
    const contacts = useSelector(selectFilteredContacts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])
    // const filterCon = () => {
        
    //    const res = contacts.filter(({name}) => {
    //         return name.toLowerCase().indexOf(currentFilter.toLowerCase()) > -1
    //    })
    //     return res
    // }

    return <Main>
            <Container title='Phonebook'>
                <AddContact/>
            </Container>
            <Container title='Contacts'>
                <FilterContacts/>

                <ContactsList contacts={contacts}  />
            </Container>
        </Main>
}