import { Input } from './FilterContacts.styled'
import { selectFilter } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/slices";

export const FilterContacts = () => {
    const currentFilter = useSelector(selectFilter)
    const dispatch = useDispatch()

    const handlerInputChange = (e) => {
      dispatch(changeFilter(e.currentTarget.value))
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