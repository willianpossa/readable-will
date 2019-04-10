import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentItem from './CommentItem'

import { getComments } from '../../Actions/comments';

class ListComments extends Component {

    componentDidMount() {
        const { post_id } = this.props

        this.props.GetComments(post_id)
    }

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

const mapStateToProps = ({ Comments: { comments } }, ownProps) => {
    const { post_id } = ownProps

    comments = comments.filter(comment => comment.parentId === post_id)

    return {
        comments
    }
}

const mapDispatchToProps = (dispatch) => ({
    GetComments: post_id => (dispatch(getComments(post_id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListComments)