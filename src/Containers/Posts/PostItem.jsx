import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

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
    votePost,
    deletePost
} from '../../Actions/posts'

class PostItem extends Component {

    state = {
        deleted: false
    }

    deletePost = _ => {
        this.props.DeletePost(this.props.id)

        if(this.props.detail) {
            this.setState(prevState => ({
                ...prevState,
                deleted: true
            }))
        }
    }

    render() {
        const { 
            id, 
            title, 
            author, 
            date, 
            comments, 
            category, 
            votes,
            single,
            detail
        } = this.props

        const { deleted } = this.state

        if(deleted) {
            return <Redirect to='/' />
        }

        return (
            <ArticleWrapper>
                <ArticleInfo>
                    <Title>
                        <Link to={ `/${category}/${id}` }>{ title }</Link>
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
                            onClick={ this.deletePost }
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
    VotePost: (type, post_id) => (dispatch(votePost(type, post_id))),
    DeletePost: (post_id) => (dispatch(deletePost(post_id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)