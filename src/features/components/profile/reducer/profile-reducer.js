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
                userId: action.payload.data.uid,
                name: action.payload.data.displayName,
                email: action.payload.data.email,
                photoUrl: action.payload.data.photoURL,
            }
        default:
            return state
    }
}

