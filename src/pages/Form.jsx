import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newNews = {
      id: Date.now(),
      title,
      content
    }

    const storedNews = JSON.parse(localStorage.getItem('news')) || []
    storedNews.push(newNews)
    localStorage.setItem('news', JSON.stringify(storedNews))

    navigate('/list') // redirige a la lista de noticias
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
