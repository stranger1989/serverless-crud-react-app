import axios from 'axios'
export const READ_TODOS = 'READ_TODOS'
export const READ_TODO = 'READ_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

const ROOT_URL = 'https://3c0sh3pmt4.execute-api.ap-northeast-1.amazonaws.com/dev/crud'

export const readTodos = () => async dispatch => {
    const response =  await axios.get(`${ROOT_URL}`)
    dispatch({ type: READ_TODOS, response })
}

export const postTodo = values => async dispatch => {
    const response =  await axios.post(`${ROOT_URL}`, values)
    dispatch({ type: CREATE_TODO, response })
}

export const putTodo = values => async dispatch => {
    const response =  await axios.put(`${ROOT_URL}/${values.id}`, values)
    dispatch({ type: UPDATE_TODO, response })
}

export const getTodo = id => async dispatch => {
    const response =  await axios.get(`${ROOT_URL}/${id}`)
    dispatch( {type: READ_TODO, response} )
}

export const deleteTodo = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/${id}`)
    dispatch({ type: DELETE_TODO, id })
}