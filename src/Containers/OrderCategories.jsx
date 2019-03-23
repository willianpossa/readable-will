import React, { Component } from 'react'

import { Wrapper, Selector } from './OrderCategoriesStyle'

class OrderCategories extends Component {

    render() {

        return (
            <Wrapper>
                <Selector>
                    <option value="">Ordernar por</option>
                    <option value="new">Mais novo</option>
                    <option value="old">Mais antigo</option>
                    <option value="no-like">Menos curtido</option>
                    <option value="more-like">Mais curtido</option>
                </Selector>
            </Wrapper>
        )
    }
}

export default OrderCategories