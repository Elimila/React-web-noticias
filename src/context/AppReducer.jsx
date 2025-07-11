const AppReducer = (state, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {
        ...state,
        news: action.payload
      }
    case 'ADD_NEWS':
      return {
        ...state,
        news: [...state.news, action.payload]
      }
    default:
      return state
  }
}

export default AppReducer
