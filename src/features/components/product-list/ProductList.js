import React, { useEffect } from 'react'
import { collection } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../config/firebase'
import { setCart } from '../cart-list/reducer/actions'
import { ProductItem } from './Item/ProductItem'
import s from './ProductList.module.css'
import { getFilteredList, getProductList } from './reducer/thunks'

const option = [
  { value: 'cheap', label: 'From cheap to expensive' },
  { value: 'expensive', label: 'From expensive to cheap' },
  { value: 'rating', label: 'By rating' }
]

export const ProductList = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.auth.isLogged)
  const productList = useSelector(state => state.products.productList)
  const productsRef = collection(db, 'products')

  useEffect(() => {
    dispatch(getProductList(productsRef))
    const carts = localStorage.getItem('carts')
    if (carts) {
      dispatch(setCart(JSON.parse(carts)))
    }
  }, [dispatch])

  const onChangeSelect = e => {
    dispatch(getFilteredList(e.currentTarget.value, productsRef))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.select_wrapper}>
        <select onChange={onChangeSelect}>
          {option.map(el => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <h1>Product list</h1>
      <div className={s.list_wrapper}>
        {productList.map(p => (
          <ProductItem key={p.id} item={p} isLogged={isLogged} />
        ))}
      </div>
    </div>
  )
}
