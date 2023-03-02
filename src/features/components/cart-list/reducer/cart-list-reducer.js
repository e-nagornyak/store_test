const initialState = {
  cartList: []
}

export const CartListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART-LIST/ADD-CART':
      return {
        ...state,
        cartList: [...state.cartList, { ...action.payload.item, count: 1 }]
      }
    case 'CART-LIST/DELETE-CART':
      return {
        ...state,
        cartList: state.cartList.filter(el => el.id !== action.payload.id)
      }
    case 'CART-LIST/CHANGE-COUNT': {
      const { id, count } = action.payload
      return {
        ...state,
        cartList: state.cartList.map(el => (el.id === id ? { ...el, count } : el))
      }
    }
    default:
      return state
  }
}
