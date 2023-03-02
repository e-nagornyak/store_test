import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { setAppStatus } from '../../../../app/reducer/actions'
import { auth, googleProvider } from '../../../../config/firebase'
import { errorUtils } from '../../../../utils/error-utils'
import { setCart } from '../../cart-list/reducer/actions'
import { setLogged } from './actions'

export const signIn = (email, password) => async dispatch => {
  dispatch(setAppStatus('loading'))
  try {
    await signInWithEmailAndPassword(auth, email, password)
    dispatch(setLogged(true))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}

export const signUp = (email, password) => async dispatch => {
  dispatch(setAppStatus('loading'))
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    dispatch(setAppStatus('succeeded'))
    dispatch(setLogged(true))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}

export const signInWithGoogle = () => async dispatch => {
  dispatch(setAppStatus('loading'))
  try {
    await signInWithPopup(auth, googleProvider)
    dispatch(setLogged(true))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}

export const logout = () => async dispatch => {
  dispatch(setAppStatus('loading'))
  try {
    await signOut(auth)
    localStorage.removeItem('carts')
    dispatch(setCart([]))
    dispatch(setLogged(false))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}
