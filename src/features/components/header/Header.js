import React, {memo, useCallback} from 'react'
import {AppBar, Box, Button, LinearProgress, Toolbar} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../auth/reducer/thunks";
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

    return <AppBar className={s.header} color="secondary" position="fixed">
        <Toolbar>
            <Box className={s.btn_wrapper}>
                <Button
                    variant={'outlined'}
                    onClick={toMain}
                    color={'inherit'}>Main</Button>
                <Button
                    variant={'outlined'}
                    color={'inherit'}
                    onClick={toShop}>Shop</Button>
                {isLogged
                    ? <Button
                        variant={'outlined'}
                        color={'inherit'}
                        onClick={toProfile}>Profile</Button>
                    : <Button
                        color={'inherit'}
                        variant={'outlined'}
                        onClick={toAuth}>Login</Button>
                }
                {isLogged && <Button color={'inherit'} variant='outlined'
                                     onClick={logoutHandler}>Logout</Button>}
            </Box>
        </Toolbar>
        {status === 'loading' && <LinearProgress sx={{width: '100%'}} color="warning"/>}
    </AppBar>
})