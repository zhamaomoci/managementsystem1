import React, { Component } from 'react';
import { Button, Card, message } from 'antd';

export default class Message extends Component {
    showMessage=(type)=>{
        message[type]('那一年天空很高风很清澈')
    }
    render(){
        return(
            <div>
                <Card title="全局提示框">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}