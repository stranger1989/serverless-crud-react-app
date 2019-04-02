import {
    READ_TODOS,
} from '../actions'

export default ( state = {}, action) => {
    switch (action.type) {
        case READ_TODOS:
            console.log(action.response.data);
            return state
        default:
            return state
    }
}
