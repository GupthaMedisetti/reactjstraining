function loginFormReducer( prevState = { username: '', password: '' }, action ) {
    let newState;

    switch( action.type ) {
        case 'USERNAME_CHANGE':
            newState = { ...prevState, username: action.payload.username };
            break;
        case 'PASSWORD_CHANGE':
            newState = { ...prevState, password: action.payload.password };
            break;
        default:
            newState = { ...prevState };
    }

    console.log( prevState, action, newState );

    return newState;    
}

export default loginFormReducer;