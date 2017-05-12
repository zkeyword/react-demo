import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store, { history } from 'STORE'
import routes from 'ROUTE'

if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>,
    document.getElementById('app')
)
