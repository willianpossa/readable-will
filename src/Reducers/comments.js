import {
    GET_ALL_COMMENTS,
    UPDATE_VOTESCORE_COMMENT,
    REMOVE_COMMENT,
    ADD_COMMENT,
    EDIT_COMMENT,
    CHANGE_EDIT_COMMENT
} from '../Actions/ActionTypes'

const defaultState = {
    comments: [],
    editComment: {}
}

export default function comments(state = defaultState, action) {
    let { comments } = state

    switch(action.type) {    
        case GET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }

        case UPDATE_VOTESCORE_COMMENT:
            comments = comments.map(comment => {
                if(comment.id === action.comment_id) {
                    return {
                        ...comment,
                        voteScore: action.score
                    }
                }

                return comment
            })

            return {
                ...state,
                comments
            }

        case REMOVE_COMMENT:
            comments = comments.map(comment => {
                if(comment.id === action.comment.id) {
                    return {
                        ...action.comment
                    }
                }

                return comment
            })

            comments = comments.filter(comment => comment.deleted === false)

            return {
                ...state,
                comments
            }

        case EDIT_COMMENT:
            comments = comments.map(comment => {
                if(comment.id === action.comment.id) {
                    return {
                        ...action.comment
                    }
                }

                return comment
            })

            return {
                ...state,
                comments,
                editComment: {}
            }
        
        case ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat([action.comment])
            }

        case CHANGE_EDIT_COMMENT:
            return {
                ...state,
                editComment: action.comment
            }

        default:
            return state
    }
}