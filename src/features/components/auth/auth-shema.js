import * as yup from 'yup'

export const AuthSchema = yup.object({
  email: yup.string().required('Email is required').email('Email must be a valid'),
  password: yup.string().min(7).required()
})
