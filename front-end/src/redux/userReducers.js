import LogIn from './userActions'

const initialState = {
    user: '',
}

const user=(state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN': 
        return {
            user: 'id'
        }
    
        default: 
        return state;
    }
}

export default user;