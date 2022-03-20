import React from "react";
import axios from "axios";
import "./ListUsers.scss"
import { withRouter } from 'react-router-dom'

class ListUsers extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        //////////// Using PROMISE to get data from URL /////////////////////
        // axios.get("https://reqres.in/api/users?page=2")
        //     .then(res => {
        //         console.log(">>> check Axios.get(url): ", res.data.data)
        //     })

        //////////////// Using ASYNC & AWAIT to get data from URL ////////////
        let res = await axios.get("https://reqres.in/api/users?page=2")
        this.setState({ listUsers: (res && res.data && res.data.data) ? res.data.data : [] })

    }
    // componentDidMount() {
    //     this.props.history.push('/DetailUserTodos')
    // }
    showDetail = (userDetail) => {
        this.props.history.push(`/ListUsers/${userDetail.id}`)
    }
    render() {
        let { listUsers } = this.state
        return (
            < div className="list-user-container" >
                <div className="list-user-title">
                    Fetch all users list
                </div>
                <div className="list-user-content">
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                < div className="child" key={user.id} onClick={() => this.showDetail(user)}>
                                    {index + 1} - {user.first_name}  {user.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
} export default withRouter(ListUsers)