import { ContactsList } from "components/ContactsList/ContactsList";
import { AddContact } from 'components/AddContact/AddContact'
import { Container } from "components/Container/Container";
import { FilterContacts } from "components/FilterContacts/FilterContacts";
import { Main } from './Phonebook.styled'
import { filter, phone } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const Phonebook = () => {
    // const [contacts, setContacts] = useState(contactsInfo)
    // const [filter, setFilter] = useState('')
    const currentFilter = useSelector(filter)
    const contacts = useSelector(phone)

    // const deleteContact = (currentId) => {
    //    const update =  contacts.filter(({ id }) => {
    //         const res = id === currentId
    //         return !res
    //    })
        
    //     setContacts(update)

    // }

    // const addNewContact = (name, number) => {
    //     const newContact = {
    //         id: nanoid(),
    //         name,
    //         number
    //     }

    //     setContacts(prev => [newContact, ...prev])
    // }

    // const addFilter = (filter) => {
    //     setFilter(filter)

    // }

    const filterCon = () => {
        
       const res = contacts.filter(({name}) => {
            return name.toLowerCase().indexOf(currentFilter.toLowerCase()) > -1
       })
        return res
    }

    return <Main>
            <Container title='Phonebook'>
                <AddContact/>
            </Container>
            <Container title='Contacts'>
                <FilterContacts/>

                <ContactsList contacts={filterCon()}  />
            </Container>
        </Main>
}