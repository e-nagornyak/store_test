const initialState = {
    isLogged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH/SET-LOGGED":
            return {...state, isLogged: action.payload.isLogged}
        default:
            return state
    }
}

