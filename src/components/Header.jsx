import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/form">Crear noticia</Link></li>
          <li><Link to="/list">Lista de noticias</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
