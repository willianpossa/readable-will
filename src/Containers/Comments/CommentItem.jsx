import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CommentItemHolder, GeneralInfo, Author, Content, VoteScoreHolder, VoteScore, UpdateVoteScore, Action } from './CommentItemStyle'

import { updateVoteScore, removeComment, changeEditComment } from '../../Actions/comments'

class ItemComment extends Component {

    render() {
        const {
            id,
            author,
            body,
            voteScore            
        } = this.props

        return (
            <CommentItemHolder>
                <GeneralInfo>
                    <Author>{ author }</Author>
                    <Content>{ body }</Content>
                    <Action onClick={ () => { this.props.ChangeEditComment(this.props) } }>Editar</Action>
                    <Action onClick={ () => { this.props.RemoveComment(id) } } className="red">Remover</Action>
                </GeneralInfo>
                <VoteScoreHolder>
                    <UpdateVoteScore onClick={ () => { this.props.UpdateVoteScore('upVote', id) } }></UpdateVoteScore>
                    <VoteScore>{ voteScore }</VoteScore>
                    <UpdateVoteScore onClick={ () => { this.props.UpdateVoteScore('downVote', id) } }></UpdateVoteScore>
                </VoteScoreHolder>
            </CommentItemHolder>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    UpdateVoteScore: (comment_id, option) => (dispatch(updateVoteScore(comment_id, option))),
    RemoveComment: (comment_id) => (dispatch(removeComment(comment_id))),
    ChangeEditComment: comment => (dispatch(changeEditComment(comment)))
})

export default connect(null, mapDispatchToProps)(ItemComment)