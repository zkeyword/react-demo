import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

const connectComponent = createContainer(
    ({ list }) => ({ list }),        // mapStateToProps,
    require('ACTION/base/test').default,    // mapActionCreators,
)

export default {
    path: 'base/test2',

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

                cb(null, connectComponent(require('COMPONENT/Test/').default))
            }, 'test2')
        }
    }
}
