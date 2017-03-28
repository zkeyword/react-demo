import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store, { history } from 'STORE'
import routes from 'ROUTE'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>,
    document.getElementById('root')
)
