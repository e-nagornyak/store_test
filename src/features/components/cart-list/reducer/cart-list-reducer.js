const initialState = {
    productList: []
}

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT/SET-PRODUCT":
            console.log(action.payload)
            return {...state, productList: action.payload.products}
        default:
            return state
    }
}

