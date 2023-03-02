import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton } from '../../../common/components/CustomButton'
import s from './CartList.module.css'
import { changeCount, deleteCart } from './reducer/actions'

export const CartList = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cartList.cartList)

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Cart list</h2>
      {cartItem.length ? (
        <ul className={s.product_wrapper}>
          {cartItem.map(c => {
            const deleteItem = () => dispatch(deleteCart(c.id))
            const changeCountItem = e => dispatch(changeCount(c.id, e.currentTarget.value))

            return (
              <li key={c.id}>
                <div className={s.info}>
                  <img className={s.item_icon} src={c.photoURL} alt="product item" />
                  <span> {c.name}</span>
                  <span> ${c.price}</span>
                </div>
                <input
                  className={s.count}
                  onChange={changeCountItem}
                  type="number"
                  value={c.count}
                />
                <CustomButton title="Delete" onClick={deleteItem} />
              </li>
            )
          })}
          <CustomButton title="Buy" onClick={() => alert('Buy')} />
        </ul>
      ) : (
        <h1>List is empty</h1>
      )}
    </div>
  )
}
