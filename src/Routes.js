import Posts from './Pages/Posts'
import EditPost from './Pages/EditPost'
import ViewPost from './Pages/ViewPost'
import Category from './Pages/Category'
import NotFoundPage from './Pages/NotFound';

export default [
    {
        component: NotFoundPage,
        path: '/not-found',
        exact: true
    },
    {
        component: Posts,
        path: '/',
        exact: true
    },
    {
        component: EditPost,
        path: '/post/new',
        exact: true
    },
    {
        component: EditPost,
        path: '/:post_id/edit',
        exact: true
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