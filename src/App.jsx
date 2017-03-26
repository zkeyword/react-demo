import React, { Component } from 'react'
import Header from './components/header'
import './App.styl'

import { browserHistory as history, Router } from 'react-router'
import routes from 'routes'

import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import * as CounterActions from '$redux/actions'
import Counter from 'components/Counter'
import configureStore from '$redux/store/configureStore'

const store = configureStore()

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CounterActions, dispatch)
})

const CounterWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Provider store={store}>
                    <CounterWithStore />
                </Provider>
                <Header />
                <Router history={history} routes={routes} key={Math.random()} />
            </div>
        )
    }
}
