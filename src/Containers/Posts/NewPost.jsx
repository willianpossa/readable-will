import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import RandomizeString from '../../Helpers/RandomizeString'

import {
    FormHolder,
    LabelField, 
    InputField, 
    SelectHolder,
    SelectField,
    TextareaField,
    Button,
    BackButton
} from './NewPostStyle'

import { 
    addPost,
    get_post_detail,
    editPost,
    emptyPost
} from '../../Actions/posts'

class NewPost extends Component {

    state = {
        postID: '',
        title: '',
        author: '',
        body: '',
        category: 'react',
        postCreated: false
    }

    handleChange = ({ target: { name, value }}) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    submitForm = () => {
        const { title, author, body, category, postID } = this.state

        let post = {}

        if(postID !== '') {
            post = {
                title,
                body
            }
        } else {
            post = {
                id: RandomizeString(22),
                timestamp: Date.now(),
                title,
                body,
                author,
                category
            }
        }

        if(author !== '' && body !== '') {
            if(postID !== '') {
                this.props.EditPost(postID, post)
            } else {
                this.props.AddPost(post)
            }

            this.setState(prevState => ({
                ...prevState,
                postCreated: true
            }))
        }
    }

    componentDidMount() {
        const { post_id } = this.props

        if(post_id)
            this.props.GetPostDetail(post_id)
    }

    componentWillUnmount() {
        this.props.EmptyPost()
    }

    componentDidUpdate(prevProps) {
        if(this.state.postID === '' && Object.keys(this.props.post).length > 0) {
            const { post } = this.props

            this.setState(prevState => ({
                ...prevState,
                postID: post.id,
                title: post.title,
                author: post.author,
                category: post.category,
                body: post.body
            }))
        }
    }

    render() {
        const { postCreated } = this.state

        if(postCreated) {
            return <Redirect to='/' />
        }

        return (
            <FormHolder>
                <div className="form-group">
                    <LabelField htmlFor="title">Título</LabelField>
                    <InputField
                        type="text"
                        name="title"
                        id="title"
                        value={ this.state.title }
                        onChange={ this.handleChange }
                    />
                </div>
                <div className="form-group">
                    <LabelField htmlFor="author">Autor</LabelField>
                    <InputField 
                        type="text" 
                        name="author" 
                        disabled={ this.props.edit } 
                        id="author" 
                        value={ this.state.author } 
                        onChange={ this.handleChange }
                    />
                </div>
                <div className="form-group">
                    <LabelField htmlFor="category">Categoria</LabelField>
                    <SelectHolder>
                        <SelectField
                            disabled={ this.props.edit } 
                            name="category" 
                            id="category" 
                            value={ this.state.category } 
                            onChange={ this.handleChange }
                        >
                            { this.props.categories.map(category => (
                                <option key={ category.path } value={ category.name }>{ category.name }</option>
                            ))}
                        </SelectField>
                    </SelectHolder>
                </div>
                <div className="form-group">
                    <LabelField htmlFor="body">Conteúdo</LabelField>
                    <TextareaField name="body" id="body" value={ this.state.body } onChange={ this.handleChange } />
                </div>
                <div className="button-holder">
                    <Button onClick={ this.submitForm }>{ this.props.edit ? 'Editar' : 'Criar' }</Button>
                    <BackButton>
                        <Link to="/">Voltar</Link>
                    </BackButton>
                </div>
            </FormHolder>
        )
    }
}

const mapStateToProps = ({ Posts, Categories }) => {
    return {
        post: Posts.post,
        categories: Categories.list
    }
}

const mapDispatchToProps = dispatch => ({
    AddPost: data => (dispatch(addPost(data))),
    GetPostDetail: id => (dispatch(get_post_detail(id))),
    EditPost: (id, data) => (dispatch(editPost(id, data))),
    EmptyPost: _ => (dispatch(emptyPost()))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)