import React, { Component } from 'react'

import ListCategories from '../Components/Categories/List'
import OrderCategories from '../Containers/OrderCategories'

import ListPosts from '../Containers/Posts/Posts'

class CategoryPage extends Component {

    render() {

        return (
            <div>
                <ListCategories />
                <main>
                    <h2>Category</h2>
                    <div className="actions-page">
                        <OrderCategories />
                        <button>Write Post</button>
                    </div>
                    <ListPosts />
                </main>
            </div>
        )
    }
}

export default CategoryPage