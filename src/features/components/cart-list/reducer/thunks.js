import { setAppStatus } from '../../../../app/reducer/actions'
import { errorUtils } from '../../../../utils/error-utils'
import { removeItemInLocalStorage } from '../../../../utils/utils-local-storage'
import { deleteCart } from './actions'

export const removeCart = id => async dispatch => {
  dispatch(setAppStatus('loading'))
  try {
    dispatch(deleteCart(id))
    removeItemInLocalStorage(id)
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}
