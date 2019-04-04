import styled from 'styled-components'

import { Media } from '../../ConfigStyle'

const ArticleWrapper = styled.article`
    display: flex;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0px 0px 30px 3px #7b51c933;
    margin-bottom: 30px;
    padding: 20px 30px;
`

const ArticleInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h5`
    color: #2a184c;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 3px;
`

const GeneralsInfo = styled.div`
    flex: 0 0 100%;
    color: #656161;
    align-items: center;
    margin-bottom: 5px;
`

const Date = styled.span`
    display: inline-block;
    margin-left: 5px;
`

const Author = styled.span`
    display: inline-block;
    margin-right: 5px;
`

const ActionsWrapper = styled.div`
    flex: 0 0 100%;
    align-items: center;
`

const Category = styled.span`
    background-color: #6a44baad;
    border-radius: 10px;
    padding: 2px 12px;
    color: #FFF;
    margin-right: 10px;
`

const Action = styled.span`
    font-weight: 600;
    font-size: 16px;
    margin-right: 10px;

    &.red
    {
        color: #b51111;
    }

    &.blue
    {
        color: #182094;
    }
`

const Comments = styled.p`
    display: inline-block;
    margin-left: 10px;
    font-size: 16px;
    color: #6B44BA;
`

const LikeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Arrow = styled.span`
    height: 20px;
    width: 20px;
    background-color: #000;
`

const Like = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #666;

    &.positive
    {
        color: #3dbd30;
    }

    &.negative
    {
        color: #ff3a3a;
    }
`

export { 
    ArticleWrapper,
    ArticleInfo, 
    Title, 
    GeneralsInfo,
    Date, 
    Author, 
    ActionsWrapper, 
    Category, 
    Action, 
    Comments,
    LikeWrapper,
    Like,
    Arrow
}