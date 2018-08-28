import React, { Component } from 'react';
import {Card, Button, Icon, Radio} from 'antd';
import './ui.less';

export default class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            size: 'default'
        }
    }
    handleCloseLoading= ()=> {
        this.setState({
            loading: false
        })
    }
    handleChange= (e)=> {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">carry on</Button>
                    <Button>carry on</Button>
                    <Button type="dashed">carry on</Button>
                    <Button type="danger">carry on</Button>
                    <Button disabled>carry on</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button icon="left" type="primary" style={{marginRight: '0'}}>返回</Button>
                        <Button type="primary">
                            前进<Icon type="right"/>
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>carry on</Button>
                    <Button size={this.state.size}>carry on</Button>
                    <Button type="dashed" size={this.state.size}>carry on</Button>
                    <Button type="danger" size={this.state.size}>carry on</Button>
                </Card>
            </div>
        )
    }
}