import { GET_ALL_CATEGORIES } from '../Actions/ActionTypes'

const defaultState = {
    list: []
}

export default function categories(state = defaultState, action) {
    switch(action.type) {

        case GET_ALL_CATEGORIES:
            return {
                ...state,
                list: action.categories
            }

        default:
            return state
    }
}