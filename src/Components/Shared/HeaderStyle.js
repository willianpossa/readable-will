import styled from 'styled-components'

import { Setup, Media } from '../../ConfigStyle'

const HeaderWrapper = styled.header`
    background-color: ${ Setup.colors.main };
    border-bottom: 8px solid ${ Setup.colors.second };
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;

    ${ Media.tablet`
        padding: 0 15px;
        display: flex;
        align-items: center;
        height: 65px;
        justify-content: space-between;
    ` }
`

const ApplicationName = styled.h1`
    color: #FEFEFE;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 30px;

    ${ Media.tablet`
        margin-bottom: 0px;
    ` }
`

const CategoryWrapper = styled.div`
    flex: 0 0 100%;
    text-align: center;

    ${ Media.tablet`
        flex: 1;
        text-align: right;
    ` }
`

export { 
    HeaderWrapper, 
    HeaderContainer,
    CategoryWrapper, 
    ApplicationName 
}