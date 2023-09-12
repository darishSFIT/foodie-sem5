import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import FoodPage from './pages/Food/FoodPage'

import Main from './pages/Main/main'
import Book from './pages/Book/book'
import Table from './pages/Table/table'
import ThankYou from './pages/ThankYou/thankYou'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path ='/' element={<HomePage />} />
        <Route path ='/search/:searchTerm' element={<HomePage />} />
        <Route path ='/tag/:tag' element={<HomePage />} />
        <Route path ='/food/:id' element={<FoodPage />} />

        <Route path ='/book/:id' element={<Book/>} />
        <Route path ='/table/:id' element={<Table/>} />
        <Route path ='/main/:id' element={<Main/>} />
        <Route path ='/thankYou/:id' element={<ThankYou/>} />
    </Routes>
  )
}
