import React, { Component } from 'react'

import OrderCategories from '../Containers/OrderCategories'

import ListPosts from '../Containers/Posts/Posts'

class CategoryPage extends Component {

    render() {
        const { category } = this.props.match.params

        return (
            <div>
                <main>
                    <h2>Categoria: { category }</h2>
                    <div className="actions-page">
                        <OrderCategories />
                        <button>Write Post</button>
                    </div>
                    <ListPosts category={ category } />
                </main>
            </div>
        )
    }
}

export default CategoryPage