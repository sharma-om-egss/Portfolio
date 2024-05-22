import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Header />
    <HomePage/>
    <Footer/>
    </>
  )
}

export default App
