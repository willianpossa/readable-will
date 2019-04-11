import React, { Component } from 'react'

import PostDetail from '../Containers/Posts/PostDetail'

class ViewPostPage extends Component {

    render() {
        const { post_id } = this.props.match.params

        return (
            <div>
                <main>
                    <PostDetail post_id={ post_id } />
                </main>
            </div>
        )
    }
}

export default ViewPostPage