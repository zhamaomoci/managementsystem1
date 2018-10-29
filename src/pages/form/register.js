import React, {Component} from 'react';
import { Checkbox, Card, Form, Button, Input, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends Component{
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(userInfo, JSON.stringify(userInfo), this.props.form)
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
    }
    // 重置
    // this.props.form.resetFields()
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
        const rowObject = {
            minRows:4,
            maxRows:6
        }
        const offsetLayout = {
            wrapperCol: {
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
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
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue:'1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:18
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2'
                                })(
                                    <Select>
                                        <Option value="1">咸鱼1</Option>
                                        <Option value="2">咸鱼2</Option>
                                        <Option value="3">咸鱼3</Option>
                                        <Option value="4">咸鱼4</Option>
                                        <Option value="5">咸鱼5</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest',{
                                    initialValue:['2','5']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">爬山</Option>
                                        <Option value="6">骑行</Option>
                                        <Option value="7">桌球</Option>
                                        <Option value="8">麦霸</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    initialValue: true,
                                    valuePropName:'checked'
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    
                                })(
                                    <DatePicker
                                    // showTime属性表示可以选择具体时间
                                        showTime
                                        format='YYYY-MM-DD HH:mm:ss'
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue:'北京市海淀区奥林匹克公园'
                                })(
                                    <TextArea
                                        autosize={rowObject}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister)