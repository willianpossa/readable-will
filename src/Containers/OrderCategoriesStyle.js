import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    background-color: #FFF;
    border-radius: 70px;
    display: inline-block;
    border: 1px solid #7B55C8;

    &:after
    {
        content: '';
        display: inline-block;
        border-top: 5px solid #7B55C8;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        position: absolute;
        right: 14px;
        top: 11px;
    }
`

const Selector = styled.select`
    padding: 4px 38px 6px 18px;
    font-size: 11px;
    font-weight: 700;
    color: #7B55C8;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    background: transparent;
`

export { Wrapper, Selector }