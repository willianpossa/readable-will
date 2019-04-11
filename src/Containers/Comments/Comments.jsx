import React, { Component } from 'react'

import CommentItem from './CommentItem'

class ListComments extends Component {

    render() {
        const { comments } = this.props

        return (
            <div>
                { comments.map(comment => (
                    <CommentItem key={ comment.id } { ...comment } />
                )) }
            </div>
        )
    }
}

export default ListComments