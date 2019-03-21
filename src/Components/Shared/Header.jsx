import React from 'react'
import { Link } from 'react-router-dom'

import { 
    HeaderWrapper, 
    HeaderContainer, 
    ApplicationName, 
    CategoryWrapper 
} from './HeaderStyle'

const Header = () => (
    <HeaderWrapper>
        <HeaderContainer className="container">
            <ApplicationName><Link to="/">Readable</Link></ApplicationName>
            <CategoryWrapper>123</CategoryWrapper>
        </HeaderContainer>
    </HeaderWrapper>
)

export default Header