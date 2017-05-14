import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
    componentWillMount() {
    }

    render() {
        let {
            location: { hash }   // 通过 App 传入
        } = this.props
        let title
        let item = []
        let current
        title = '卓普信系统'
        item.push({ name: '基础资料', hash: 'base', index: 'currency' })
        item.push({ name: '合同管理', hash: 'role', index: 'currency' })
        item.push({ name: '融资借款', hash: 'give', index: 'currency' })
        item.push({ name: '货物赎回', hash: 'give', index: 'currency' })
        item.push({ name: '押品管理', hash: 'give', index: 'currency' })
        item.push({ name: '换货管理', hash: 'give', index: 'currency' })
        item.push({ name: '资金管理', hash: 'give', index: 'currency' })
        if (/base/g.test(hash)) {
            current = 'base'
        }

        return (
            <div className='lt-header'>
                <div className='main'>
                    <div className='fn-left'>
                        <div className='logo' title={title}>&nbsp;</div>
                        <ul className='nav'>
                            {
                                item.map((data, i) => {
                                    return (
                                        <li className={data.hash === current && 'on'} key={i}><Link to={`/${data.hash}/${data.index}/list`}>{data.name}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='fn-right'>
                        <div className='user'>
                            <i className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
