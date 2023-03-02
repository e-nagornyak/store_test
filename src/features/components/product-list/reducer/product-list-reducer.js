const initialState = {
  productList: []
}

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT/SET-PRODUCT':
      return { ...state, productList: action.payload.products }
    default:
      return state
  }
}

