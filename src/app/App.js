import React, { useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorSnackbar } from '../features/components/error-bar/ErrorSnackbar'
import { Footer } from '../features/components/footer/Footer'
import { Header } from '../features/components/header/Header'
import { RoutesPage } from '../features/components/routes-page/RoutesPage'
import './App.css'
import { me } from './reducer/thunks'

export const App = () => {
  const dispatch = useDispatch()
  const isInitialized = useSelector(state => state.app.isInitialized)

  useEffect(() => {
    dispatch(me())
  }, [dispatch])

  if (!isInitialized) {
    return (
      <div className="circular-progress">
        <CircularProgress color="secondary" size={150} />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <RoutesPage />
        <ErrorSnackbar />
      </div>
      <Footer />
    </div>
  )
}
