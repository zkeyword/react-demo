import React, { Component } from 'react'
import Header from 'COMPONENT/Header'
import Left from 'COMPONENT/Left'
import Footer from 'COMPONENT/Footer'
import { Breadcrumb, Form, Button, Select, Input } from 'element-react'
import { Table } from 'antd'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this, 'user')
    }

    componentWillMount() {
        this.state = {
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            form: {
                user: '',
                region: ''
            }
        }
    }

    onSubmit(e) {
        e.preventDefault()

        console.log('submit!')
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        })
    }

    render() {
        const { entAccountList } = this.props
        entAccountList()

        // console.log(data, this.props)

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        }]

        const pagination = {
            showSizeChanger: true,
            defaultPageSize: 20,
            pageSizeOptions: ['20', '50', '100']
        }

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
                            <div className=''>
                                <Form inline model={this.state.form} onSubmit={this.onSubmit} className='demo-form-inline'>
                                    <Form.Item>
                                        <Input value={this.state.form.user} placeholder='审批人' onChange={this.onChange} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Select value={this.state.form.region} placeholder='活动区域'>
                                            <Select.Option label='区域一' value='shanghai' />
                                            <Select.Option label='区域二' value='beijing' />
                                        </Select>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button nativeType='submit' type='primary'>查询</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <Table
                                columns={columns}
                                dataSource={this.state.data}
                                bordered
                                pagination={pagination}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
