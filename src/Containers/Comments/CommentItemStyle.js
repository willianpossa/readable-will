import styled from 'styled-components'

const CommentItemHolder = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFF;
    border-radius: 15px;
    margin-bottom: 30px;
    padding: 15px 20px;

    &:last-child
    {
        margin-bottom: 0;
    }
`

const GeneralInfo = styled.div`
    flex: 1;
`

const Author = styled.p`
    font-size: 14px;
    text-transform: uppercase;
    color: #2a184c;
`

const Content = styled.p`
    font-size: 16px;
    color: #6B44BA;
`

const VoteScoreHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const VoteScore = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #666;
    margin: 10px 0;
`

const UpdateVoteScore = styled.span`
    height: 20px;
    width: 20px;
    background-color: #000;
`

const Action = styled.button`
    font-weight: 600;
    font-size: 12px;
    margin-right: 10px;
    cursor: pointer;
    text-decoration: underline;
    color: #182094;

    &.red
    {
        color: #b51111;
    }
`

export { 
    CommentItemHolder,
    GeneralInfo,
    Author, 
    Content, 
    VoteScore, 
    UpdateVoteScore, 
    Action,
    VoteScoreHolder
}