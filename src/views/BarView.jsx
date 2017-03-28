import React, { Component, PropTypes } from 'react'

export default class BarView extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'bar' }
        console.log(this.props, this.props.actions)
        // this.props.actions.test({ node_id: 25, limit: 150 })
    }

    static propTypes = {
        actions: PropTypes.object
    }

    render() {
        return (
            <p>
                I'm {this.state.name}.
            </p>
        )
    }
}
