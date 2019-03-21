import React, { Component } from 'react'

import ListCategories from '../Components/Categories/List'
import OrderCategories from '../Components/Categories/Order'

import Posts from '../Containers/Posts/Posts'

class ListPost extends Component {

    render() {

        return (
            <div>
                <ListCategories />
                <main>
                    <h2>Posts</h2>
                    <div className="actions-page">
                        <OrderCategories />
                        <button>Write Post</button>
                    </div>
                    <Posts />
                </main>
            </div>
        )
    }
}

export default ListPost