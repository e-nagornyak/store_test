import React from 'react'
import { Button } from '@mui/material'

export const CustomButton = ({ title, onClick }) => (
  <Button variant="outlined" color="inherit" onClick={onClick}>
    {title}
  </Button>
)
