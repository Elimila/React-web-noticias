import React, { useEffect, useState } from 'react'

function ListNews() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || []
    setNews(storedNews)
  }, [])

  return (
    <main>
      <h1>Lista de noticias</h1>
      {news.length === 0 ? (
        <p>No hay noticias guardadas.</p>
      ) : (
        news.map((item) => (
          <article key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </article>
        ))
      )}
    </main>
  )
}

export default ListNews

