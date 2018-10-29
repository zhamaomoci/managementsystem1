import React, { Component } from 'react'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    render() {
        const comments = [
            { username: 'Jerry', content: 'Hello' },
            { username: 'Tomy', content: 'World' },
            { username: 'Lucy', content: 'Good' }
        ]
        return (
            // <div>{comments.map((comment, i) => {
            //     return (
            //         <div key={i}>
            //             {comment.username}：{comment.content}
            //         </div>
            //     )
            // })}</div>
            // <div>
            //     {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            // </div>
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} />
                )}
            </div>
        )
    }
}

export default CommentList

class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
        </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}