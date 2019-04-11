import React, { Component } from 'react'
import { connect } from 'react-redux'

import RandomizeString from '../../Helpers/RandomizeString'

import { addComment, editComment } from '../../Actions/comments'

class NewComment extends Component {

    state = {
        author: '',
        body: '',
        commentID: ''
    }

    handleChange = ({ target: { name, value }}) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    cleanForm = _ => {
        this.setState(prevState => ({
            ...prevState,
            commentID: '',
            author: '',
            body: ''
        }))
    }

    createComment = () => {
        const { author, body, commentID } = this.state
        const { post_id } = this.props

        let comment = {}

        if(commentID !== '') {
            comment = {
                timestamp: Date.now(),
                body
            }
        } else {
            comment = {
                id: RandomizeString(22),
                timestamp: Date.now(),
                body,
                author,
                parentId: post_id
            }
        }

        if(author !== '' && body !== '') {
            if(commentID !== '') {
                this.props.EditComment(commentID, comment)
            } else {
                this.props.AddComment(comment)
            }

            this.cleanForm()
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.comment.id !== this.props.comment.id && Object.keys(this.props.comment).length > 0) {
            this.setState(prevState => ({
                ...prevState,
                commentID: this.props.comment.id,
                author: this.props.comment.author,
                body: this.props.comment.body
            }))
        }
    }

    render() {
        const { commentID } = this.state

        return (
            <div className="new-comment-holder">
                <div className="form-group">
                    <label htmlFor="author">Autor</label>
                    <input type="text" name="author" disabled={ commentID !== '' } id="author" value={ this.state.author } onChange={ this.handleChange } />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Comentário</label>
                    <textarea name="body" id="body" value={ this.state.body } onChange={ this.handleChange } />
                </div>
                <div className="button-holder">
                    <button onClick={ this.createComment }>Enviar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ Comments }) => {
    return {
        comment: Comments.editComment
    }
}

const mapDispatchToProps = dispatch => ({
    AddComment: data => (dispatch(addComment(data))),
    EditComment: (comment_id, newComment) => (dispatch(editComment(comment_id, newComment)))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewComment)