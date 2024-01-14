import { Input } from './FilterContacts.styled'
import { filter } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/slices";

export const FilterContacts = () => {
    // const [filter, setFilter] = useState('')
    const currentFilter = useSelector(filter)
    const dispatch = useDispatch()

    const handlerInputChange = (e) => {
      dispatch(changeFilter(e.currentTarget.value))
        // setFilter(e.currentTarget.value)
        // addFilter(e.currentTarget.value)
    }

     return <>
            <label htmlFor="find">Find contacts by name</label>
            <Input
                id="find"
                type="text"
                value={currentFilter}
                onChange={(e)=>handlerInputChange(e)}
            /></>
}