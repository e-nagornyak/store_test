import { auth } from '../../config/firebase'
import { setLogged } from '../../features/components/auth/reducer/actions'
import { setUser } from '../../features/components/profile/reducer/actions'
import { errorUtils } from '../../utils/error-utils'
import { setAppInitialized } from './actions'

export const me = () => async dispatch => {
  try {
    await auth.onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(setLogged(true))
        dispatch(setUser(user))
      }
      dispatch(setAppInitialized(true))
    })
  } catch (e) {
    errorUtils(e, dispatch)
    dispatch(setAppInitialized(true))
  }
}
