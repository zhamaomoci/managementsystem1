import React, {Component} from 'react';
import {Button, Card, notification} from 'antd';

export default class Notice extends Component{
    openNotification= (type, direction)=> {
        // 因为第一组按钮没有传递direction这个参数，所以先判断一下有没有这个参数
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '温馨提示',
            description: '今天星期六，天朗气清，五月天再度归巢',
        })
    }
    render(){
        return(
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning','bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }
}