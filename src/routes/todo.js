import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
    path: 'todo',

    /* 布局基页 */
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('VIEW/todo').default)
        }, 'todoView')
    },

    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                // 注入 Reducer
                injectReducer('todos', require('REDUCER/todo').default)

                /* 组件连接 state */
                const TodoContainer = createContainer(
                    ({ todos }) => ({ todos }),        // mapStateToProps,
                    require('ACTION/todo').default,    // mapActionCreators,
                    require('COMPONENT/Todo/').default // 木偶组件
                )

                cb(null, TodoContainer)
            }, 'todo')
        }
    }
}
