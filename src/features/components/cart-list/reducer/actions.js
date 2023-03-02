export const addCart = item => ({ type: 'CART-LIST/ADD-CART', payload: { item } })
export const deleteCart = id => ({ type: 'CART-LIST/DELETE-CART', payload: { id } })
export const changeCount = (id, count) => ({
  type: 'CART-LIST/CHANGE-COUNT',
  payload: { id, count }
})
