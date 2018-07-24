export function usernameAction( username ) {
    return {
        type: 'USERNAME_CHANGE',
        payload: { username }
    }
}

export function passwordAction( password ) {
    return {
        type: 'PASSWORD_CHANGE',
        payload: { password }
    }
}