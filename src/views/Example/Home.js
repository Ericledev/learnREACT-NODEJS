import React from "react";
import { withRouter } from "react-router"
import logo from '../../assets/images/logo.png'
import { connect } from 'react-redux'

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/Todos')
    //     }, 3000);
    // }
    handleDelete = (user, index) => {
        console.log('>>>> check item: ', user)
        this.props.deleteUserRedux(user)
    }
    handleAddNew = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log('>>>> check props redux: ', this.props.dataRedux)
        let listUser = this.props.dataRedux
        return (
            <>
                < div > Hello Navigation </div >
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) =>
                            <div key={item.id}>
                                {index + 1} - {item.name}  --   <span onClick={() => this.handleDelete(item, index)}>X</span>
                            </div>
                        )
                    }
                    <button type="button" onClick={() => this.handleAddNew()}> Add New </button>
                </div>
            </>

        )
    }

}

const mapStateToProps = (state) => ({
    dataRedux: state.user
})
const mapDispatchToProps = (dispatch) => ({
    deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
    addUserRedux: () => dispatch({ type: 'ADD_RANDOM_USER' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))