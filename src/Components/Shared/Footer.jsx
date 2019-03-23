import React from 'react'

import { 
    FooterWrapper, 
    FooterContainer,
    TitleFooter
} from './FooterStyle'

const Footer = () => (
    <FooterWrapper>
        <FooterContainer className="container">
            <TitleFooter>
                <a href="https://github.com/willianpossa" rel="noopener noreferrer" target="_blank">Developed by Will</a>
            </TitleFooter>
        </FooterContainer>
    </FooterWrapper>
)

export default Footer