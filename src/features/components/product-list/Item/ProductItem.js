import React, { memo, useState } from 'react'
import { Button, Modal, Paper, Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart } from '../../cart-list/reducer/actions'
import s from './ProductItem.module.css'

export const ProductItem = memo(({ item, isLogged }) => {
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartList.cartList)
  const { name, rating, price, photoURL, description, id } = item

  const btn_disable = cartItems.some(el => el.id === id)

  const closeModal = () => setOpen(false)
  const onClickHandler = () => {
    if (isLogged) {
      dispatch(addCart(item))
    } else {
      setOpen(true)
    }
  }

  return (
    <>
      <Paper className={s.wrapper}>
        <img className={s.image} src={photoURL} alt="" />
        <h4>{name}</h4>
        <Rating readOnly value={rating} />
        <p>${price}</p>
        <p className={s.description}>{description}</p>
        <Button
          disabled={btn_disable}
          onClick={onClickHandler}
          variant="contained"
          color="secondary">
          Add to cart
        </Button>
      </Paper>
      <Modal disableRestoreFocus open={isOpen} onClose={closeModal}>
        <div className="modal_box">
          <div className={s.modal}>
            <button type="button" onClick={closeModal} className={s.btn_close}>
              X
            </button>
            <h2>To add an item to cart you need</h2>
            <NavLink className={s.link} to="/sign-in">
              Sign in
            </NavLink>
          </div>
        </div>
      </Modal>
    </>
  )
})
