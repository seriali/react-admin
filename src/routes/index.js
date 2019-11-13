import {
    Dashboard,
    Login,
    NotFound,
    Setting,
    ArticleList,
    ArticleEdit
} from '../views'

export const mainRouter = [
    {
        pathname:'/login',
        component:Login
    },
    {
        pathname:'/404',
        component:NotFound
    }
];
export const adminRouter = [
    {
        pathname:'/admin/dashboard',
        component:Dashboard
    },
    {
        pathname:'/admin/setting',
        component:Setting
    },
    {
        pathname:'/admin/article',
        component:ArticleList,
        exact:true
    },
    {
        pathname:'/admin/article/edit/:id',
        component:ArticleEdit
    }
];
