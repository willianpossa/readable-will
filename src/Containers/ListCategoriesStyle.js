import styled from 'styled-components'

const CategoriesList = styled.ul`
    list-style: none;
`

const Category = styled.li`
    display: inline-block;
    margin: 0 7px;

    a
    {
        font-weight: 400;
        color: #FFF;
        text-transform: uppercase;
    }
`

export {
    CategoriesList,
    Category
}