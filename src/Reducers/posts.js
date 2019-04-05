import { 
    FETCHING_POSTS,
    GET_OR_UPDATE_POSTS
} from "../Actions/posts";

const defaultState = {
    data: [],
    wait: false
}

export default function posts(state = defaultState, action) {
    switch(action.type) {

        case FETCHING_POSTS:
            return {
                ...state,
                wait: true
            }

        case GET_OR_UPDATE_POSTS:
            return {
                ...state,
                wait: false,
                data: action.posts
            }

        default:
            return state
    }
}