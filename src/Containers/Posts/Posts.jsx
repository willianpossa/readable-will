import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostItem from './PostItem'

import { fetch_posts } from '../../Actions/posts'

import DateFormatter from '../../Helpers/DateFormatter'

class ListPosts extends Component {

    componentDidMount() {
        this.props.FetchPosts()
    }

    render() {
        const { posts } = this.props

        return (
            <div>
                { posts.map(post => (
                    <PostItem 
                        key={ post.id }
                        id={ post.id }
                        title={ post.title }
                        author={ post.author }
                        date={ DateFormatter(post.timestamp) }
                        comments={ post.commentCount }
                        category={ post.category }
                        votes={ post.voteScore }
                        single={ post.body }
                        detail={ false }
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ Posts }, ownProps) => {
    let { posts } = Posts

    if(ownProps.category)
        posts = Posts.posts.filter(post => post.category === ownProps.category)

    return {
        posts
    }
}

const mapDispatchToProps = dispatch => ({
    FetchPosts: _ => (dispatch(fetch_posts()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)