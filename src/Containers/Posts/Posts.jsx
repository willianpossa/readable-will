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
        const { DisplayedPosts } = this.props

        return (
            <div>
                { DisplayedPosts.map(post => (
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
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ Posts }, ownProps) => {
    let DisplayedPosts = []

    if(ownProps.category)
        DisplayedPosts = Posts.posts.filter(post => post.category === ownProps.category)
    else
        DisplayedPosts = Posts.posts

    return {
        DisplayedPosts
    }
}

const mapDispatchToProps = dispatch => ({
    FetchPosts: _ => (dispatch(fetch_posts()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)