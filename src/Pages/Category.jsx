import React, { Component } from 'react'

import OrderCategories from '../Containers/OrderCategories'
import PageHeader from '../Components/Shared/PageHeader'

import Posts from '../Containers/Posts/Posts'

class CategoryPage extends Component {

    render() {
        const { category } = this.props.match.params

        return (
            <div>
                <main>
                    <PageHeader title={`Categoria: ${ category }`} button={ true } />
                    <div className="actions-page">
                        <OrderCategories category={ category } />
                    </div>
                    <Posts category={ category } />
                </main>
            </div>
        )
    }
}

export default CategoryPage