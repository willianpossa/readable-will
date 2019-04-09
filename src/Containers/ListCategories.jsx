import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { get_categories } from '../Actions/categories'

class ListCategories extends Component {

    componentDidMount() {
        this.props.GetCategories()
    }

    render() {
        const { categories } = this.props

        return (
            <div>
                { categories.map(category => (
                    <Link key={ category.path } to={ `/${category.path}` }>{ category.name }</Link>
                )) }
            </div>
        )
    }
}

const mapStateToProps = ({ Categories }) => {

    return {
        categories: Categories.list
    }
}

const mapDispatchToProps = dispatch => ({
    GetCategories: _ => (dispatch(get_categories()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories)