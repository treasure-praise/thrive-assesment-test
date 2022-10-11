import "./App.css"

import { Route, Routes } from "react-router-dom"
import Header from "./componets/layout/Header"
import Footer from "./componets/layout/Footer"

import UserDisplay from "./pages/UserDisplay"

import Home from "./pages/Home"
import TestPage from "./pages/Test"

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/user/:login' element={<UserDisplay />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
