import { setAppError, setAppStatus } from '../app/reducer/actions'

export const errorUtils = (error, dispatch) => {
  console.error(error)
  dispatch(setAppError('Something wrong'))
  dispatch(setAppStatus('failed'))
}
