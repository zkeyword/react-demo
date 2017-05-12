import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
    path: 'base/test',

    /* 布局基页 */
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('VIEW/test').default)
        }, 'todoView')
    },

    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                // 注入 Reducer, 其中list是initState
                injectReducer('list', require('REDUCER/base/test').default)

                /* 组件连接 state */
                const TodoContainer = createContainer(
                    ({ list }) => ({ list }),        // mapStateToProps,
                    require('ACTION/base/test').default,    // mapActionCreators,
                    require('COMPONENT/Test/').default // 木偶组件
                )

                cb(null, TodoContainer)
            }, 'test')
        }
    }
}
