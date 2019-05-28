import React, { Component } from 'react'

import { CommentsHolder } from './CommentsStyle.js'

import CommentItem from './CommentItem'

class ListComments extends Component {

    render() {
        const { comments } = this.props

        return (
            <CommentsHolder>
                { comments.map(comment => (
                    <CommentItem key={ comment.id } { ...comment } />
                )) }
            </CommentsHolder>
        )
    }
}

export default ListComments