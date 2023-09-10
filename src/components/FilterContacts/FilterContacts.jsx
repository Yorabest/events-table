import { Component } from "react";

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
            <input
                id="find"
                type="text"
                value={this.state.filter}
                onChange={this.handlerInputChange}
            /></>
    }

}