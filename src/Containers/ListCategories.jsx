import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { CategoriesList, Category } from './ListCategoriesStyle'

import { get_categories } from '../Actions/categories'

class ListCategories extends Component {

    componentDidMount() {
        this.props.GetCategories()
    }

    render() {
        const { categories } = this.props

        if(categories.length === 0) {
            return null
        } else {
            return (
                <CategoriesList>
                    { categories.map(category => (
                        <Category key={ category.path }>
                            <Link to={ `/${category.path}` }>{ category.name }</Link>
                        </Category>
                    )) }
                </CategoriesList>
            )
        }
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