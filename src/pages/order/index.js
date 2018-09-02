import React, {Component} from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker, message } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
import { Record } from '../../../node_modules/immutable';
const FormItem = Form.Item;
const Option = Select.Option;

export default class Order extends Component {
    state = {
        orderInfo: {},
        orderConfirmVisible: false
    }
    params = {
        page: 1
    }
    componentDidMount(){
        this.requestList();
    }
    // 请求接口数据---渲染list
    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res)=> {
            let list = res.result.item_list.map((item, index)=> {
                item.key = index;
                return item;
            })
            this.setState({
                list,
                pagination: Utils.pagination(res, (current)=> {
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }
    // 单选按钮
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
        console.log(selectKey, 111,record)
    }
    // 订单结束确认
    handleConfirm = ()=> {
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return
        }
        axios.ajax({
            url: '/order/ebike_info',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res)=> {
            if(res.code ==0){
                this.setState({
                    orderInfo: res.result,
                    orderConfirmVisible: true
                })
            }
            console.log(res.result)
        })
    }
    // 结束订单
    handleFinishOrder = ()=> {
        let item = this.state.selectedItem;
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res)=> {
            if(res.code == 0){
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisible: false
                })
                // 重新渲染list
                this.requestList()
            }
        })
    }
    // 点击详情按钮
    openOrderDetail = () => {
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title: '消息',
                content: '请选择一条订单'
            })
            return
        }
        window.open(`/#/common/order/detail/${item.id}`, '_blank')
    }
    render(){
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                // render(distance) {
                //     return distance / 1000 + 'Km';
                // }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19}
        }
        return (
            <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>
                <Card>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" onClick={this.handleConfirm} >结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index)=> {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            }
                        }}
                    ></Table>
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisible}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisible: false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%' }
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}


// 为了取值方便，将form抽取出来
class FilterForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {/* 利用getFieldDecorator将数据和定义的字段进行绑定 */}
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            ></DatePicker>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            ></DatePicker>
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create({})(FilterForm);