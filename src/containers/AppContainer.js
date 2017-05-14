import React, { Component } from 'react'
import { hashHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {

    shouldComponentUpdate() {
        return false
    }

    render() {
        const { routes, store } = this.props

        return (
            <Provider store={store}>
                <Router history={hashHistory} children={routes} />
            </Provider>
        )
    }
}

export default AppContainer
