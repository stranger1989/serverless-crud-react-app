import axios from 'axios'
export const READ_TODOS = 'READ_TODOS'

const ROOT_URL = 'https://3c0sh3pmt4.execute-api.ap-northeast-1.amazonaws.com/dev/crud'

export const readTodos = () => async dispatch => {
    const response =  await axios.get(`${ROOT_URL}`)
    dispatch({ type: READ_TODOS, response })
}