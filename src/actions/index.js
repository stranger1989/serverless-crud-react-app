import axios from 'axios'
export const READ_TODOS = 'READ_TODOS'
export const CREATE_TODO = 'CREATE_TODO'

const ROOT_URL = 'https://3c0sh3pmt4.execute-api.ap-northeast-1.amazonaws.com/dev/crud'

export const readTodos = () => async dispatch => {
    const response =  await axios.get(`${ROOT_URL}`)
    dispatch({ type: READ_TODOS, response })
}

export const postTodo = values => async dispatch => {
    console.log(values);
    console.log(ROOT_URL);
    const response =  await axios.post(`${ROOT_URL}`, values)
    console.log(response);
    dispatch({ type: CREATE_TODO, response })
}