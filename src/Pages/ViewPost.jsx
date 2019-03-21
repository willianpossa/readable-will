import React, { Component } from 'react'

import ListCategories from '../Components/Categories/List'

import PostItem from '../Containers/Posts/PostItem'

import Comments from '../Containers/Comments/Comments'
import NewComment from '../Containers/Comments/NewComment'

class ViewPostPage extends Component {

    render() {

        return (
            <div>
                <ListCategories />
                <main>
                    <h2>View Post</h2>
                    <PostItem />

                    <hr />

                    <button>Write Comment</button>
                    <NewComment />

                    <Comments />
                </main>
            </div>
        )
    }
}

export default ViewPostPage