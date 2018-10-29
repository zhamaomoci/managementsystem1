import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './a.less';
class Comment extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    handleSubmitComment=(comment)=>{
        console.log(comment,44444)
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        // 小提示：这里的代码直接往 state.comments 数组里面插入数据
        // 其实违反了 React.js 的 state 不可直接修改的原则 。
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default Comment