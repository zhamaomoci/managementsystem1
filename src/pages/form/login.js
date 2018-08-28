import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';
const FormItem = Form.Item;


class FormLogin extends Component {
    handleSubmit=()=> {
        // 先用getFieldDecorator封装每一个输入框
        // 再用此方法可以获取到下面表单里的所有值，得到一个object对象
        let userInfo = this.props.form.getFieldsValue();
        // 通过下面的方法进行循环，进行表单的校验
        this.props.form.validateFields((err, values)=> {
                if(!err){
                    message.success(`${userInfo.userName}恭喜你，通过表单校验，当前密码是${userInfo.password}`)
                }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop: 10}}>
                    <Form layout="horizontal" style={{width: 300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    // 初始化值
                                    initialValue: 'Jack',
                                    rules: [
                                        {
                                            // 必须输入
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            // 最大最小长度
                                            min: 5,
                                            max: 10,
                                            message: '长度要求5-10位'
                                        },
                                        {
                                            // 正则验证
                                            // pattern: /^\w+$/g,
                                            // 注意转义
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: '用户名必须是字母或者数字'
                                        }
                                    ]
                                })(
                                    // 用prefix给输入框加图标
                                    <Input prefix={<Icon type='user'/>} placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '123456',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type='lock' />} placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    // 注意checkbox比较特殊，不能单单设置initialValue来初始化
                                    // 还需要指定valuePropName来指定值为checked  两者结合才可以
                                    initialValue: true,
                                    valuePropName: 'checked',
                                    rules: []
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);