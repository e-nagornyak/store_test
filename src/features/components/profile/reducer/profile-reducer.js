const initialState = {
    userId: '',
    name: '',
    email: '',
    photoUrl: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE/SET-USER":
            return {
                ...state,
                userId: action.payload.displayName,
                name: action.payload.name,
                email: action.payload.email,
                photoUrl: action.payload.photoUrl,
            }
        default:
            return state
    }
}

