import styled from 'styled-components'
import { Setup, Media } from '../../ConfigStyle'

const FooterWrapper = styled.footer`
    background-color: #FFF;
    height: 65px;
    padding: 0;
    box-shadow: 0 -11px 17px 0 #7b51c933;
`

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
`

const TitleFooter = styled.h1`
    color: ${ Setup.colors.main };
    font-size: 12px;
    font-weight: 400;
    text-transform: lowercase;
`

export { FooterWrapper, FooterContainer, TitleFooter }