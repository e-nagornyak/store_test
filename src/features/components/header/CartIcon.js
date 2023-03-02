import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { useSelector } from 'react-redux'
import cart from '../../../assets/cart.svg'
import { CartList } from '../cart-list/CartList'
import s from './Header.module.css'

export const CartIcon = () => {
  const [isOpen, setOpen] = useState(false)
  const count = useSelector(state => state.cartList.cartList.length)
  const closeModal = () => setOpen(false)
  const openModal = () => setOpen(true)

  return (
    <>
      <img onClick={openModal} className={s.cart} src={cart} alt="icon" />
      <span className={s.count}>{count}</span>
      <Modal disableRestoreFocus open={isOpen} onClose={closeModal}>
        <div className="modal_box">
          <CartList />
        </div>
      </Modal>
    </>
  )
}
