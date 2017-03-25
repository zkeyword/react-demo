import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './MainView.styl'

export default class FooView extends Component {
    constructor(props) {
        super(props)
        this.state = { val: 1 }
    }
    static propTypes = {
        children: PropTypes.element
    }
    inputChange = e => {
        this.setState({ val: e.target.value })
    }
    render() {
        return (
            <div className='main-view'>
                <div className='btn-group'>
                    <Link to='/foo' className='btn' activeClassName='active'>To Foo</Link>
                    <Link to='/bar' className='btn' activeClassName='active'>To Bar</Link>
                </div>
                <div className='view'>
                    {this.props.children}
                </div>
                <input type='text' defaultValue={this.state.val} onChange={this.inputChange} />{this.state.val}
            </div>
        )
    }
}
