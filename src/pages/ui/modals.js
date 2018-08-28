import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

export default class Modals extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        }
    }
    handleOpen= (type)=> {
        this.setState({
            [type]: true
        })
    }
    handleConfirm= (type)=> {
        Modal[type]({
            title: '确认？',
            content:'确定要修改吗？',
            onOk(){
                console.log('ok键的回调')
            },
            onCancel(){
                console.log('cancel键的回调')
            }
        })
    }
    render(){
        return (
            <div>
                <Card title="基础模态框">
                {/* 实现弹框，要给按钮绑定点击事件；这些按钮的弹框事件时有共同之处的，所以可以通过传递不同的参数来实现有差异的部分 */}
                {/* 点击事件： 不传参的时候直接写  传参的时候要改成箭头函数 */}
                    <Button type="primary" onClick={()=> this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=> {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>模拟弹框功能实现</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>模拟弹框功能实现</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    style={{top: '20px'}}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>模拟弹框功能实现</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    wrapClassName='vertical-center-modal'
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>模拟弹框功能实现</p>
                </Modal>
            </div>
        )
    }
}