const initialState = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APP/SET-ERROR":
            return {...state, error: action.payload.error}
        case "APP/SET-STATUS":
            return {...state, status: action.payload.status}
        case "APP/SET-IT-INITIALIZED":
            return {...state, isInitialized: action.payload.value}
        default:
            return state
    }
}

