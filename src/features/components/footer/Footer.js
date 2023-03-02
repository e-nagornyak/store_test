import React from 'react'
import s from './Footer.module.css'

export const Footer = () => (
  <div className={s.wrapper}>
    <div className={s.info_box}>
      <span>Contact</span>
      <span>About us</span>
      <span>Information about the company</span>
    </div>
    <div className={s.info_box}>
      <span>Help</span>
      <span>Shipping and payment</span>
      <span>Guarantee</span>
    </div>
    <div className={s.info_box}>
      <span>Call center hours</span>
      <div className={s.logo_box}>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="logo" />
        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="logo" />
        <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="logo" />
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="logo" />
      </div>
    </div>
    <div />
  </div>
)
