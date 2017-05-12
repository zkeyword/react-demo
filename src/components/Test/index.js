import { Component } from 'react'

export default class Test extends Component {
    componentWillMount() {
        this.props.addTodo('xxxx')
    }
    render() {
        console.log(this.props)
        return null
    }
}
