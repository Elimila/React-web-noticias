import React from 'react'

function Footer() {
  return (
    <footer style={{ background: '#eee', padding: '10px', marginTop: '20px', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} - Web de noticias creada por Elida Rodríguez</p>
    </footer>
  )
}

export default Footer
