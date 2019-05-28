import React, { Component } from 'react'

import NewPost from '../Containers/Posts/NewPost'

class NewPostPage extends Component {

    render() {
        const { post_id } = this.props.match.params

        const lenghtPost = Object.keys(this.props.match.params).length

        return (
            <div>
                <main>
                    <h2 className="title title-form">{ post_id ? 'Editar Post' : 'Novo Post' }</h2>
                    <NewPost edit={ lenghtPost > 0 } post_id={ post_id } />
                </main>
            </div>
        )
    }
}

export default NewPostPage