import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from '../features/components/auth/reducer/auth-reducer'
import { CartListReducer } from '../features/components/cart-list/reducer/cart-list-reducer'
import { productListReducer } from '../features/components/product-list/reducer/product-list-reducer'
import { profileReducer } from '../features/components/profile/reducer/profile-reducer'
import { appReducer } from './reducer/app-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  auth: authReducer,
  products: productListReducer,
  cartList: CartListReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
window.store = store
