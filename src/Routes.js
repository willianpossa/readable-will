import Posts from './Pages/Posts'
import EditPost from './Pages/EditPost'
import ViewPost from './Pages/ViewPost'
import Category from './Pages/Category'

export default [
    {
        component: Posts,
        path: '/',
        exact: true
    },
    {
        component: EditPost,
        path: '/post/new',
        exact: false
    },
    {
        component: EditPost,
        path: '/:post_id/edit',
        exact: false
    },
    {
        component: ViewPost,
        path: '/:category/:post_id',
        exact: true
    },
    {
        component: Category,
        path: '/:category',
        exact: true
    },
]