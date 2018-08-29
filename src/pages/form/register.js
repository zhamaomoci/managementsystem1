import React, {Component} from 'react';
import {Checkbox, Card, Form, Button, Input, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message} from 'antd';

const FormItem = Form.Item;
class FormRegister extends Component{
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        return(
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                    {/* label属性设置输入框前面的提示文本  不需要写冒号，会自动添加 */}
                        {/* 使用三个点语法进行结构来使用 */}
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [
                                      
                                    ]
                                })(
                                    <Input placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister)