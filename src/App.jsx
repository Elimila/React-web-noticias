import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import ListNews from './pages/ListNews'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Header /> {/* <- ahora sí se renderiza el menú */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<ListNews />} />
      </Routes>
      <Footer /> {/* <- aquí se coloca el pie de página */}
    </>
  )
}


export default App


