import React from "react";

class AddComponent extends React.Component{
    state={
        add: "",
        age: ""
    }

    handleAddress = (event) => {
        this.setState({ add: event.target.value })
    }
    handleAge = (event) => {
        this.setState({ age: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.add || !this.state.age){
            alert ("Missing require Parameter!")
            return
        }
        this.props.addNewArrow({
            id: Math.floor(Math.random()*100).toString(),
            add: this.state.add,
            age: this.state.age
        })
        this.state.add=''
        this.state.age=''
    }
    render(){
        return(
            <form>
                    
            <label htmlFor='address'>Address:</label><br />
            <input type="text" value={this.state.add} id="address"
                onChange={(event) => this.handleAddress(event)}
            /><br />
            <label htmlFor="age">Age:</label><br />
            <input type="text" value={this.state.age} id='age'
                onChange={(event) => this.handleAge(event)}
            /><br />
            <input type="submit" value="Submit"                 /////type="submit" will reload page,
                onClick={(event) => this.handleSubmit(event)}   /// we use event.preventDefault() to unload page
               // onKeyPress={(event) => this.handleSubmit(event)}
            />

        </form>
        )
    }
}
export default AddComponent