import { getDocs, orderBy, query } from 'firebase/firestore'
import { setAppStatus } from '../../../../app/reducer/actions'
import { errorUtils } from '../../../../utils/error-utils'
import { setProducts } from './actions'

export const getProductList = ref => async dispatch => {
  dispatch(setAppStatus('loading'))
  try {
    const data = await getDocs(ref)
    const filteredData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    dispatch(setProducts(filteredData))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}

export const getFilteredList = (sort, ref) => async dispatch => {
  dispatch(setAppStatus('loading'))
  let direction = 'desc'
  let sortDirection = 'price'
  if (sort === 'expensive') {
    direction = 'desc'
  } else if (sort === 'cheap') {
    direction = 'asc'
  } else {
    sortDirection = sort
  }
  try {
    const q = query(ref, orderBy(sortDirection, direction))
    const querySnapshot = await getDocs(q)
    const filteredData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    dispatch(setProducts(filteredData))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    errorUtils(e, dispatch)
  }
}
