import MainView from 'views/MainView'
import FooView from 'views/FooView'
import BarView from 'views/BarView'

export default [
    {
        path: '/',
        component: MainView,
        childRoutes: [
            require('./todo').default,
            {
                path: 'foo',
                component: FooView
            },
            {
                path: 'bar',
                component: BarView
            }
        ]
    }
]
