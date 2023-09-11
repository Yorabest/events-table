import { Component } from "react";
import {Input} from './FilterContacts.styled'

export class FilterContacts extends Component{
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