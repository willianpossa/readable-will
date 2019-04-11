import React, { Component } from 'react'
import { connect } from 'react-redux'

import DateFormatter from '../../Helpers/DateFormatter'

import { updateVoteScore, removeComment, changeEditComment } from '../../Actions/comments'

class ItemComment extends Component {

    render() {
        const {
            id,
            author,
            body,
            timestamp,
            voteScore            
        } = this.props

        return (
            <div>
                <p>{ author }</p>
                <p>{ body }</p>
                <p>{ DateFormatter(timestamp) }</p>
                <span onClick={ () => { this.props.UpdateVoteScore('upVote', id) } }>up</span>
                <p>{ voteScore }</p>
                <span onClick={ () => { this.props.UpdateVoteScore('downVote', id) } }>down</span>
                <span onClick={ () => { this.props.ChangeEditComment(this.props) } }>edit</span>
                <span onClick={ () => { this.props.RemoveComment(id) } }>Remove</span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    UpdateVoteScore: (comment_id, option) => (dispatch(updateVoteScore(comment_id, option))),
    RemoveComment: (comment_id) => (dispatch(removeComment(comment_id))),
    ChangeEditComment: comment => (dispatch(changeEditComment(comment)))
})

export default connect(null, mapDispatchToProps)(ItemComment)