import _ from 'lodash'
import {
    READ_TODOS,
} from '../actions'

export default ( todos = {}, action) => {
    switch (action.type) {
        case READ_TODOS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return todos
    }
}
