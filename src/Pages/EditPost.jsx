import React, { Component } from 'react'

import NewPost from '../Containers/Posts/NewPost'

class NewPostPage extends Component {

    render() {

        return (
            <div>
                <main>
                    <h2>Edit Post</h2>
                    <NewPost />
                </main>
            </div>
        )
    }
}

export default NewPostPage