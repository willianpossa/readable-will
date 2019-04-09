import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
    Arrow,
    ContentWrapper
} from './PostItemStyle'

import { 
    vote_post
} from '../../Actions/posts'

class PostItem extends Component {

    render() {
        const { 
            id, 
            title, 
            author, 
            date, 
            comments, 
            category, 
            votes,
            single
        } = this.props

        return (
            <ArticleWrapper>
                <ArticleInfo>
                    <Title>
                        <Link to={ `/view/${id}` }>{ title }</Link>
                    </Title>
                    <GeneralsInfo>
                        <Author>{ author }</Author> - <Date>{ date }</Date>
                        <Comments>
                            <i className="icon-comments"></i>
                            { comments } comentário{ comments > 1 ? 's' : '' }
                        </Comments>
                    </GeneralsInfo>
                    { single !== '' && 
                        <ContentWrapper>{ single }</ContentWrapper>
                    }
                    <ActionsWrapper>
                        <Category>{ category }</Category>
                        <Action className="blue">Editar</Action>
                        <Action 
                            onClick={ () => { this.props.DeletePost(id) } }
                            className="red"
                        >Deletar</Action>
                    </ActionsWrapper>
                </ArticleInfo>
                <LikeWrapper>
                    <Arrow onClick={ () => { this.props.VotePost('upVote', id) } }>
                        <i className="icon-up-arrow"></i>
                    </Arrow>
                    <Like>{ votes }</Like>
                    <Arrow onClick={ () => { this.props.VotePost('downVote', id) } }>
                        <i className="icon-down-arrow"></i>
                    </Arrow>
                </LikeWrapper>
            </ArticleWrapper>
        )
    }
}

const mapStateToProps = ({ Posts }, ownProps) => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    VotePost: (type, id) => (dispatch(vote_post(type, id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)