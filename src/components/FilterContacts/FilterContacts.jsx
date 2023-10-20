import { Component, useState } from "react";
import {Input} from './FilterContacts.styled'

export const FilterContacts = ({addFilter}) => {
    const [filter, setFilter] = useState('')

  const handlerInputChange = (e) => {
        setFilter(e.currentTarget.value)
        addFilter(e.currentTarget.value)
    }

     return <>
            <label htmlFor="find">Find contacts by name</label>
            <Input
                id="find"
                type="text"
                value={filter}
                onChange={handlerInputChange}
            /></>
}

export class OldFilterContacts extends Component{
    state = {
        filter: ''
    }

    handlerInputChange = (e) => {
        this.setState({
            filter: e.currentTarget.value
        })

        this.props.addFilter(e.currentTarget.value)


    }

    render() {
        return <>
            <label htmlFor="find">Find contacts by name</label>
            <Input
                id="find"
                type="text"
                value={this.state.filter}
                onChange={this.handlerInputChange}
            /></>
    }

}