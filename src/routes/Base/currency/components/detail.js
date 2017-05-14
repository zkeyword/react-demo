import React, { Component } from 'react'
import Header from 'COMPONENT/Header'
import Left from 'COMPONENT/Left'
import Footer from 'COMPONENT/Footer'
import { Breadcrumb, Form, Input } from 'element-react'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillMount() {
        this.state = {}
    }

    onSubmit(e) {
        e.preventDefault()
        console.log('It will submit!')
    }

    render() {
        const { entAccountList } = this.props
        entAccountList()

        return (
            <div className='page-base'>
                <Header location={location} />
                <div className='lt-main fn-clear'>
                    <div className='lt-left'>
                        <Left location={location} />
                    </div>
                    <div className='lt-right'>
                        <Breadcrumb separator='>'>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>基础资料</Breadcrumb.Item>
                            <Breadcrumb.Item>企业信息管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='main'>
                            <Form labelPosition='right' labelWidth='100'>
                                <div className='block'>
                                    <div className='block-header'>
                                        <span>基本信息</span>
                                    </div>
                                    <div className='block-content'>
                                        <Form.Item label='产品编号：'>
                                            <Input className='' size='small' />
                                        </Form.Item>
                                        <Form.Item label='产品名称：'>
                                            <Input className='' size='small' />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className='block'>
                                    <div className='block-header'>
                                        <span>金融信息</span>
                                    </div>
                                    <div className='block-content'>
                                        <Input />
                                    </div>
                                </div>
                                <div className='block'>
                                    <div className='block-header'>
                                        <span>供应链信息</span>
                                    </div>
                                    <div className='block-content'>
                                        <Input />
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
