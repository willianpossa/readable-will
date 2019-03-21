import React, { Component } from 'react'

import ListCategories from '../Components/Categories/List'

import NewPost from '../Containers/Posts/NewPost'

class NewPostPage extends Component {

    render() {

        return (
            <div>
                <ListCategories />
                <main>
                    <h2>Edit Post</h2>
                    <NewPost />
                </main>
            </div>
        )
    }
}

export default NewPostPage