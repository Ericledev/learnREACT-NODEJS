
import React from 'react';
import ChildComponent from './childComponent';
import FunctionChildComponent from './functionComponent';
import ConditionOutput from './conditionOutput'



class Mycomponent extends React.Component {
    state = {
        fname: "",
        lname: "",
        arrResume: [
            { id: '123', add: 'Ha Noi', age: '40' },
            { id: '456', add: 'Thanh Hoa', age: '7' },
            { id: '789', add: 'Tay Ninh', age: '37' }
        ]
    }

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
            <>
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
                        onKeyPress={(event) => this.handleSubmit(event)}
                    />

                </form>
                {/* <ChildComponent
                    propFName={this.state.fname}
                    propLName={this.state.lname}
                    propResume={this.state.arrResume}
                />
                <FunctionChildComponent propResume={this.state.arrResume} /> */}
                <ConditionOutput propResume={this.state.arrResume} />
            </>
        )
    }
}
export default Mycomponent
