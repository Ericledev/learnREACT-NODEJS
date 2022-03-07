
import React from 'react';


class MyComponent extends React.Component {
    state = { fname: "", lname: "" }

    handleFirstName = (event) => {
        this.setState({ fname: event.target.value })
    }
    handleLastName = (event) => {
        this.setState({ lname: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Get full name into state: ", this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor='fname'>First name:</label><br />
                <input type="text" value={this.state.fname} id="fname"
                    onChange={(event) => this.handleFirstName(event)}
                /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" value={this.state.lname} id='lname'
                    onChange={(event) => this.handleLastName(event)}
                /><br />
                <input type="submit" value="Submit"                 /////type="submit" will reload page,
                    onClick={(event) => this.handleSubmit(event)}   /// we use event.preventDefault() to unload page
                />
            </form>

        )
    }
}
export default MyComponent
