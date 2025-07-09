import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ListNews() {
  const { news, getNews } = useContext(GlobalContext)

  useEffect(() => {
    getNews()
  }, [])

  return (
    <main className="list-view">
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
