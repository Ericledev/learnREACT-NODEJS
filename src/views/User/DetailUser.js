import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({ user: res.data && res.data.data ? res.data.data : {} })
        console.log('>>> Check res: ', res)
    }
    backListUsers = () => {
        this.props.history.push("/ListUsers")
    }
    render() {
        console.log(">>>> check props: ", this.props)
        let { user } = this.state
        let isEmptyObject = Object.keys(user) === 0

        return (
            <>
                {
                    isEmptyObject === false &&
                    <>
                        <div>Name: {user.first_name} {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div >
                            <img src={user.avatar} alt=''></img>
                        </div>
                        <button type='button' onClick={() => this.backListUsers()}>Back</button>
                    </>
                }
            </>
        )
    }
} export default withRouter(DetailUser)