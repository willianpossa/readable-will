import React, { Component } from 'react'

import { 
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
} from './PostItemStyle'

class PostItem extends Component {

    render() {
        const { title, author, date, comments, category, votes } = this.props

        return (
            <ArticleWrapper>
                <ArticleInfo>
                    <Title>{ title }</Title>
                    <GeneralsInfo>
                        <Author>{ author }</Author> - <Date>{ date }</Date>
                        <Comments>
                            <i className="icon-comments"></i>
                            { comments } comentário{ comments > 1 ? 's' : '' }
                        </Comments>
                    </GeneralsInfo>
                    <ActionsWrapper>
                        <Category>{ category }</Category>
                        <Action className="blue">Editar</Action>
                        <Action className="red">Deletar</Action>
                    </ActionsWrapper>
                </ArticleInfo>
                <LikeWrapper>
                    <Arrow>
                        <i className="icon-up-arrow"></i>
                    </Arrow>
                    <Like>{ votes }</Like>
                    <Arrow>
                        <i className="icon-down-arrow"></i>
                    </Arrow>
                </LikeWrapper>
            </ArticleWrapper>
        )
    }
}

export default PostItem