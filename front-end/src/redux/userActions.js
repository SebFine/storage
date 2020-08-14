export const handleLogin = (user) => {
    return {
        type: 'LOGIN',
        user
    }
}

export const startHandleLogin = (user) => {
    return (dispatch) => {
        console.log('starting login')
        setTimeout(() => {
            dispatch(handleLogin(user))
        }, 500)
    }
}

