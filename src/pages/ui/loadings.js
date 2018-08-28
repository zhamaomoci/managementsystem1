import React, {Component} from 'react';
import {Card, Button, Icon, Spin, Alert} from 'antd';

export default class Loading extends Component{
    render(){
        const icon = <Icon type="loading" style={{fontSize: 24}}></Icon>
        return (
            <div>
                <Card title="spin用法">
                    <Spin size="small"></Spin>
                    <Spin ></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={icon}></Spin>
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="React"
                        description="react学习中"
                        type="info"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="React"
                            description='react学习中'
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin tip="加载中。。。">
                        <Alert
                            message="React"
                            description='react学习中'
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description='react学习中'
                            type="warning"
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}