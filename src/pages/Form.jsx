import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

function Form() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()
  const { addNews } = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newNews = {
      id: Date.now(),
      title,
      content
    }

    addNews(newNews) // usamos el context en lugar de localStorage directo

    navigate('/list') // redirige a la lista
  }

  return (
    <main>
      <h1>Crear nueva noticia</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="content">Contenido</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Guardar noticia</button>
      </form>
    </main>
  )
}

export default Form
