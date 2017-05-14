import React, { Component } from 'react'
import { Menu } from 'element-react'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.onOpen = this.onOpen.bind(this)
        this.onChange = this.onClose.bind(this)
    }
    onOpen() { }
    onClose() { }
    render() {
        let { location: { hash } } = this.props
        let current
        if (/base/g.test(hash)) {
            current = 'base'
        }
        console.log(current)
        return (
            <Menu defaultActive='1' className='menu' onOpen={this.onOpen} onClose={this.onClose} theme='dark'>
                <Menu.SubMenu index='1' title='导航一'>
                    <Menu.Item index='1-1'>选项1</Menu.Item>
                    <Menu.Item index='1-2'>选项2</Menu.Item>
                    <Menu.Item index='1-3'>选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item index='2'>导航二</Menu.Item>
                <Menu.Item index='3'>导航三</Menu.Item>
            </Menu>
        )
    }
}
