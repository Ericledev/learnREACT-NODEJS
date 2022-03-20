const initState = {
    user: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Thomas' },
        { id: 3, name: 'Ericledev' }
    ]
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user: ', action)
            let user = state.user
            user = user.filter(item => item.id !== action.payload.id)
            // let newArr = [...state.user, user]
            // console.log('>>> check new state: ', newArr)
            return { ...state, user }
            break;
        case 'ADD_RANDOM_USER':
            let id = Math.floor(Math.random() * 10000)
            let userRandom = { id: id, name: `random ${id}` }
            return {
                ...state, user: [...state.user, userRandom]
            }

        default:
            return state
    }

}
export default rootReducer
//// rootReducer can be rename with any ////////////////////