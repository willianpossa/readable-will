import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Wrapper, Selector } from './OrderCategoriesStyle'

import { sortPosts } from '../Actions/posts'

class OrderCategories extends Component {

    state = {
        selected: ''
    }

    handleChange = ({ target: { value } }) => {
        this.setState(prevState => ({
            ...prevState,
            selected: value
        }))

        if(value === 'score')
            this.props.SortPosts(this.props.posts)
    }

    render() {
        const { posts } = this.props

        if(posts.length === 0)
            return null

        return (
            <Wrapper>
                <Selector value={ this.state.selected } onChange={ this.handleChange }>
                    <option value="">Ordernar por</option>
                    <option value="score">Curtida</option>
                </Selector>
            </Wrapper>
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

const mapDispatchToProps = (dispatch) => ({
    SortPosts: (posts) => (dispatch(sortPosts(posts)))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderCategories)