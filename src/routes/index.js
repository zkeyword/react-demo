export default {
    path: '/',
    component: require('../App').default,
    indexRoute: {
        component: require('VIEW/home').default
    },
    childRoutes: [
        // 路由按模块组织分离，避免单文件代码量过大
        // require('./msg').default,
        require('./todo').default,
        // 强制“刷新”页面的 hack
        {
            path: 'redirect',
            component: require('VIEW/Redirect').default
        },
        {
            path: '*',
            component: require('VIEW/404').default
        }
    ]
}
