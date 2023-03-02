import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { PasswordInput } from '../../../common/components/PasswordInput'
import { AuthSchema } from './auth-shema'
import s from './auth.module.css'
import { signInWithGoogle, signUp } from './reducer/thunks'

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLogged = useSelector(state => state.auth.isLogged)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = data => dispatch(signUp(data.email, data.password))
  const signInGoggleHandler = () => dispatch(signInWithGoogle())

  if (isLogged) {
    return <Navigate to="/profile" />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h2>Sing up</h2>
      <TextField
        {...register('email')}
        label="Email"
        color="secondary"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        id="outlined-error-helper-text"
      />
      <PasswordInput register={register} error={errors.password} />
      <Button variant="contained" type="submit" color="secondary">
        Sign up
      </Button>
      <Button variant="contained" onClick={signInGoggleHandler} color="secondary">
        Sign up With Google
      </Button>
      <Button onClick={() => navigate('/sign-in')} variant="contained" color="secondary">
        Sign in
      </Button>
    </form>
  )
}
