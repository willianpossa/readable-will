import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostItem from '../Containers/Posts/PostItem'

import Comments from '../Containers/Comments/Comments'
import NewComment from '../Containers/Comments/NewComment'

import DateFormatter from '../Helpers/DateFormatter'

import { get_post_detail } from '../Actions/posts'

class ViewPostPage extends Component {

    componentDidMount() {
        const { post_id } = this.props.match.params

        this.props.GetPostDetail(post_id)
    }

    render() {
        const {
            id,
            title,
            author,
            timestamp,
            commentCount,
            category,
            voteScore,
            body
        } = this.props.post

        return (
            <div>
                <main>
                    <PostItem
                        id={ id }
                        title={ title }
                        author={ author }
                        date={ DateFormatter(timestamp) }
                        comments={ commentCount }
                        category={ category }
                        votes={ voteScore }
                        single={ body }
                    />

                    <hr />

                    <button>Write Comment</button>
                    <NewComment />

                    <Comments />
                </main>
            </div>
        )
    }
}

const mapStateToProps = ({ Posts }, ownProps) => {
    return {
        post: Posts.post
    }
}

const mapDispatchToProps = (dispatch) => ({
    GetPostDetail: id => (dispatch(get_post_detail(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPostPage)