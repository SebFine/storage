const userInitialState = {
    user: '',
}

const user=(state=userInitialState, action) => {
    switch(action.type) {
        case 'LOGIN': 
        return {
            user: 'id',
            type: 'worker'
        }
        case 'LOGOUT':
            return {
                user: ''
            }
    
        default: 
        return state;
    }
}

export default user;

