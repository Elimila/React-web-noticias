import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  news: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getNews = () => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || []
    dispatch({ type: 'GET_NEWS', payload: storedNews })
  }

  const addNews = (newsItem) => {
    dispatch({ type: 'ADD_NEWS', payload: newsItem })

    const updated = [...state.news, newsItem]
    localStorage.setItem('news', JSON.stringify(updated))
  }

  return (
    <GlobalContext.Provider value={{
      news: state.news,
      getNews,
      addNews
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
