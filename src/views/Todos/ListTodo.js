import React from "react";
import './ListTodo.scss'
import AddObject from "./AddObject";
import { toast } from 'react-toastify';
//import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import Color from "../HOC/Color";


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodos: {}
    }
    addTodo = (newTodo) => {
        this.setState({ listTodos: [...this.state.listTodos, newTodo] })
        toast.success(newTodo.title + " is added successfully!")

    }

    deleteTodo = (itemInput) => {
        this.setState({ listTodos: this.state.listTodos.filter(arr => arr.id !== itemInput.id) })
        toast.success(itemInput.title + " is deleted successfully")
    }

    editTodo = (itemInput, index) => {

        // this.state.listTodos.splice(index, 1, itemInput)// splice(index,deleteCount,item) return changedElement
        // let temp = this.state.listTodos
        // this.setState({ listTodos: temp })
        this.setState({ editTodos: itemInput })


    }
    saveTodo = (arrInput, itemInput) => {
        this.setState({ listTodos: arrInput })

        toast.success(itemInput.title + " is saved successfully")
    }
    render() {
        //let {listTodos}=this.state

        return (
            <>
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    Hello Tuan, welcome to React for Beginer &amp; Let's go
                </p>
                <div className="list-todo-container">
                    <AddObject addTodo={this.addTodo}
                        deleteTodo={this.deleteTodo}
                        propListTodos={this.state}
                        editTodo={this.editTodo}
                        saveTodo={this.saveTodo}

                    />


                </div>
            </>
        )
    }
} export default Color(ListTodo) //Using HOC(Higher Order Component) technique