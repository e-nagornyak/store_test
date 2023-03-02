import React from 'react'
import empty from '../../../assets/empty.png'
import s from './Page404.module.css'

export const Page404 = () => (
  <div>
    <img className={s.image} src={empty} alt="" />
    <h2>404 - PAGE NO FOUND</h2>
  </div>
)
