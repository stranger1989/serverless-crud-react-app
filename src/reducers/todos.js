import _ from 'lodash'
import {
    READ_TODOS,
    READ_TODO,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
} from '../actions'

export default ( todos = {}, action) => {
    switch (action.type) {
        case READ_TODO:
        case CREATE_TODO:
        case UPDATE_TODO:
            const data = action.response.data
            return { ...todos, [data.id]: data }
        case READ_TODOS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_TODO:
            delete todos[action.id]
            return { ...todos }
        default:
            return todos
    }
}
