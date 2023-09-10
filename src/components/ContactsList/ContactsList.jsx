export const ContactsList = ({contacts, handlerDelete}) => {
    return <ul>
        {contacts.map(({ id, name, number })=>{
            return <li key={id}>
                <p>{name}: {number} </p>
                <button onClick={()=>{handlerDelete(id)}}>Delete</button>      
            </li>
        })}

    </ul>
}