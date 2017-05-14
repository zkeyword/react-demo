import { injectReducer } from '../../store/reducers'

export const currencyList = (store) => ({
    path: 'base/currency/list',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const baseContainer = require('./currency/containers/list').default
            const reducer = require('./currency/modules/list').default
            injectReducer(store, { key: 'data', reducer })
            cb(null, baseContainer)
        })
    }
})

export const currencyDetail = (store) => ({
    path: 'base/currency/detail',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const baseContainer = require('./currency/containers/detail').default
            const reducer = require('./currency/modules/detail').default
            injectReducer(store, { key: 'data2', reducer })
            cb(null, baseContainer)
        })
    }
})
