import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Comments from '../Comments/Comments'
import NewComment from '../Comments/NewComment'

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
    CommentsCount,
    LikeWrapper, 
    Like,
    Arrow,
    ContentWrapper,
    CommentsTitle
} from './PostDetailStyle'

import { 
    get_post_detail,
    votePost,
    deletePost
} from '../../Actions/posts'

import {
    getComments
} from '../../Actions/comments'

import DateFormatter from '../../Helpers/DateFormatter'

class PostDetail extends Component {

    state = {
        deleted: false
    }

    deletePost = _ => {
        const { post_id } = this.props

        this.props.DeletePost(post_id)

        this.setState(prevState => ({
            ...prevState,
            deleted: true
        }))
    }

    componentDidMount() {
        const { post_id } = this.props

        this.props.GetPostDetail(post_id)
        this.props.GetComments(post_id)
    }

    render() {
        const { 
            comments, 
            post
        } = this.props
        const { 
            id, 
            title, 
            author, 
            timestamp, 
            category, 
            voteScore,
            body
        } = post

        const { deleted } = this.state

        // if(!post.id)
        //     return <Redirect to='/not-found' />

        if(deleted) {
            return <Redirect to='/' />
        }

        return (
            <section className="post-details">
                <ArticleWrapper>
                    <ArticleInfo>
                        <Title>{ title }</Title>
                        <GeneralsInfo>
                            <Author>{ author }</Author> - <Date>{ DateFormatter(timestamp) }</Date>
                            <CommentsCount>
                                <i className="icon-comments"></i>
                                { comments.length } comentário{ comments.length > 1 ? 's' : '' }
                            </CommentsCount>
                        </GeneralsInfo>
                        <ContentWrapper>{ body }</ContentWrapper>
                        <ActionsWrapper>
                            <Category>{ category }</Category>
                            <Action className="blue">
                                <Link to={ `/${ id }/edit` }>Editar</Link>
                            </Action>
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
                        <Like>{ voteScore }</Like>
                        <Arrow onClick={ () => { this.props.VotePost('downVote', id) } }>
                            <i className="icon-down-arrow"></i>
                        </Arrow>
                    </LikeWrapper>
                </ArticleWrapper>
                
                <hr />

                <CommentsTitle>Comentários({ comments.length })</CommentsTitle>
                <NewComment post_id={ id } />

                <Comments comments={ comments } />
            </section>
        )
    }
}

const mapStateToProps = ({ Posts, Comments }) => {
    return {
        post: Posts.post,
        comments: Comments.comments
    }
}

const mapDispatchToProps = dispatch => ({
    GetComments: post_id => (dispatch(getComments(post_id))),
    GetPostDetail: id => (dispatch(get_post_detail(id))),
    VotePost: (type, post_id) => (dispatch(votePost(type, post_id))),
    DeletePost: (post_id) => (dispatch(deletePost(post_id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)