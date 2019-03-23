import React, { Component } from 'react'

import OrderCategories from '../Containers/OrderCategories'

import Posts from '../Containers/Posts/Posts'

import PageHeader from '../Components/Shared/PageHeader'

class ListPost extends Component {

    render() {

        return (
            <div>
                <PageHeader title="Posts" button={ true } />
                <div className="actions-page">
                    <OrderCategories />
                </div>
                <Posts />
            </div>
        )
    }
}

export default ListPost