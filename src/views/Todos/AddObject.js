import React from "react";
import { toast } from 'react-toastify'

class AddObject extends React.Component {
    state = {
        listTodos: [{
            id: '',
            title: ''
        }],
        editTodos: {}
    }
    handleAddOnclick = () => {
        console.log('>>> check this.state.title: ', this.state.title)
        if (!this.state.title) {   /////// this.stata.title will return undefined/null/empty => false. that mean, it don't exist
            toast.info('Please input the title !')
            return
        }

        this.props.addTodo({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        })

        //this.RefreshState(this.editTodo)
        this.setState({ title: '' })
    }
    handleInputOnchange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleDeleteOnclick = (item) => {
        if (window.confirm('Are you sure you wanna delete: ' + item.title))
            this.props.deleteTodo(item)
        //console.log('>>> Check ID inpurt: ',id.id)
    }
    handleEditOnclick = (item, index) => {
        if (window.confirm('Are you sure you wanna Edit: ' + item.title)) {
            this.props.editTodo(item, index)
            this.setState({ editTodos: item })
        }
    }
    handleOnChangeditTodos = (event) => {
        //console.log("check event Onchange: ", event.target.value)
        let editTodoCopy = { ...this.state.editTodos }
        editTodoCopy.title = event.target.value
        this.setState({ editTodos: editTodoCopy })
    }
    handleSaveOnclick = (itemInput) => {
        let { propListTodos } = this.props  // do not declare in RETURN method
        let { listTodos, editTodos } = propListTodos
        const tempMap = listTodos.map(item =>
            item.id === itemInput.id ? { ...item, title: itemInput.title } : item
        )
        // console.log('>>>check tempMap: ', tempMap)
        // console.log('>>>check itemInput: ', itemInput)
        this.props.saveTodo(tempMap, itemInput)

        const emptyObject = {}
        this.props.editTodo(emptyObject)
        this.setState({ editTodos: emptyObject })

    }

    render() {
        // this.handleInital()
        let { propListTodos } = this.props  // do not declare in RETURN method
        let { listTodos, editTodos } = propListTodos

        let isEmptyObj = Object.keys(editTodos).length === 0
        console.log('>>> check empty Object: ', isEmptyObj)
        return (
            <>
                <div className="add-todo">
                    <input type='text' value={this.state.title} onChange={(event) => this.handleInputOnchange(event)}></input>
                    <button type='button' className="add" onClick={() => this.handleAddOnclick()}>Add</button>
                </div>

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span >
                                            {index + 1} - {item.title}
                                            <button onClick={() => this.handleEditOnclick(item, index)}>
                                                Edit
                                            </button>
                                        </span>
                                        :
                                        <>
                                            {editTodos.id === item.id ?
                                                <span>
                                                    {index + 1}-<input type='text' value={this.state.editTodos.title}
                                                        onChange={(event) => this.handleOnChangeditTodos(event)}
                                                    />
                                                    <button onClick={() => this.handleSaveOnclick(this.state.editTodos, index)}>
                                                        Save
                                                    </button>
                                                </span>
                                                :
                                                <span>
                                                    {index + 1}-{item.title}
                                                    <button onClick={() => this.handleEditOnclick(item, index)}>
                                                        Edit
                                                    </button>
                                                </span>
                                            }
                                        </>
                                    }

                                    {/* <input value={item.title}></input> */}
                                    {/* <button onClick={() => this.handleEditOnclick(item, index)}>
                                        Edit
                                    </button> */}
                                    <button type='button' onClick={() => this.handleDeleteOnclick(item)}> Delete</button>
                                </div>
                            )
                        })
                    }
                </div>

            </>
        )
    }
} export default AddObject