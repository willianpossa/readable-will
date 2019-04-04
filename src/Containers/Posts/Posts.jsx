import React, { Component } from 'react'
import PostItem from './PostItem';

class ListPosts extends Component {

    render() {

        return (
            <div>
                <PostItem 
                    title="Udacity é o melhor lugar para se aprender React"
                    author="Willian Possa"
                    date="09/05/2019 18:43"
                    comments={ 2 }
                    category="react"
                    votes={ 10 }
                />
            </div>
        )
    }
}

export default ListPosts