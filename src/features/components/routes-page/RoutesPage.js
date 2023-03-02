import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Auth } from '../auth/Auth'
import { Register } from '../auth/Register'
import { Main } from '../main/Main'
import { Page404 } from '../page404/Page404'
import { ProductList } from '../product-list/ProductList'
import { Profile } from '../profile/Profile'

export const RoutesPage = () => (
  <Routes>
    <Route path="/main" element={<Main />} />
    <Route path="/sign-in" element={<Auth />} />
    <Route path="/sign-up" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/product-list" element={<ProductList />} />
    <Route path="/404" element={<Page404 />} />
    <Route path="/" element={<Navigate to="/main" />} />
    <Route path="*" element={<Navigate to="/404" />} />
  </Routes>
)
