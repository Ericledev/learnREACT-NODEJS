import React from 'react'

export class InputComponent extends React.Component {
    state = { name: "NguyetTuan", age: 40 }         //state is global object parameter
    handleOnChangeName = (event) => {
        this.setState({                            //this.setState({,}) is function of API. it will 
            name1: event.target.value               // merge "state"
        })                                         // DO NOT DO this.state.name = event.target.value
    }
    onClickButton = () => {
        alert(this.state.name)
    }
    render() {
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    hello this is classComponent1, my name is {this.state.name}
                </div>
                <div className='second'>
                    <button onClick={() => this.onClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}