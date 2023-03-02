import React, { memo, useCallback } from 'react'
import { AppBar, Box, LinearProgress, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../../common/components/CustomButton'
import { logout } from '../auth/reducer/thunks'
import { CartIcon } from './CartIcon'
import s from './Header.module.css'

export const Header = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLogged = useSelector(state => state.auth.isLogged)
  const status = useSelector(state => state.app.status)

  const logoutHandler = useCallback(() => dispatch(logout()), [dispatch])

  const toMain = useCallback(() => navigate('/main'), [navigate])
  const toShop = useCallback(() => navigate('/product-list'), [navigate])
  const toProfile = useCallback(() => navigate('/profile'), [navigate])
  const toAuth = useCallback(() => navigate('sign-in'), [navigate])

  return (
    <AppBar className={s.header} color="secondary" position="fixed">
      <Toolbar>
        <Box className={s.btn_wrapper}>
          <CustomButton title="Main" onClick={toMain} />
          <CustomButton title="Shop" onClick={toShop} />
          {isLogged ? (
            <CustomButton title="Profile" onClick={toProfile} />
          ) : (
            <CustomButton title="Login" onClick={toAuth} />
          )}
          {isLogged && <CustomButton onClick={logoutHandler} title="Logout" />}
          <CartIcon />
        </Box>
      </Toolbar>
      {status === 'loading' && <LinearProgress sx={{ width: '100%' }} color="warning" />}
    </AppBar>
  )
})
