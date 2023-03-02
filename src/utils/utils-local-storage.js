export const addToLocalStorage = item => {
  const carts = localStorage.getItem('carts')
  const data = carts ? JSON.parse(carts) : []
  data.push(item)
  localStorage.setItem('carts', JSON.stringify(data))
}
export const removeItemInLocalStorage = id => {
  const carts = localStorage.getItem('carts')
  const filteredCarts = JSON.parse(carts).filter(el => el.id !== id)
  localStorage.setItem('carts', JSON.stringify(filteredCarts))
}
