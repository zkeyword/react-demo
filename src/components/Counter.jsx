import React, { Component, PropTypes } from 'react'
import './Counter.css'

export default class Counter extends Component {
    static propTypes = {
        actions: PropTypes.object,
        // 'actions.increment': PropTypes.func,
        counter: PropTypes.object
        // 'counter.count': PropTypes.number
    }
    handleClick = () => {
        this.props.actions.increment()
    }
    render() {
        return (
            <a className='counter'
                href='javascript: void(0)'
                onClick={this.handleClick}>
                {this.props.counter.count}
            </a>
        )
    }
}
