import React from 'react'
import App from './App'
import Login_Signup from './components/Login_Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<App />}></Route>
            <Route path='/authentication' element={<Login_Signup />}></Route>
        </Routes>
    </BrowserRouter>

  )
}
