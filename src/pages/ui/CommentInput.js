import React, { Component } from 'react'

class CommentInput extends Component {
    // 因为还没有加入处理逻辑，所以你输入内容，
    // 然后点击发布是不会有什么效果的。用户可输入内容一个是用户名（username），一个是评论内容（content），我们在组件的构造函数中初始化一个 state 来保存这两个状态
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    /*
    *可以看到，CommentApp 组件将 CommentInput 和 CommentList 组合起来，
    它是它们俩的父组件，可以充当桥接两个子组件的桥梁。所以当用户点击发布按钮的时候，
    我们就将 CommentInput 的 state 当中最新的评论数据传递给父组件 CommentApp ，
    然后让父组件把这个数据传递给 CommentList 进行渲染
    */
    handleUsernameChange=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange=(e)=>{
        console.log(e.target.value,111)
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=()=>{
        if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            value={this.state.username}
                            onChange={(e)=>{this.handleUsernameChange(e)}}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                            value={this.state.content}
                            onChange={this.handleContentChange} 
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput