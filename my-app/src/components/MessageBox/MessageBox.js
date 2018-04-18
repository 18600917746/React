import React, {Component} from 'react'
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './MessageBox.css'

/**
 * TODO:1.组件拆分-传参-  案例是留言板
 *      2.文件组件之间传参
 *      3.兄弟组件传参
 *      4.节点内执行方法 都必须在 函数体内执行
 *      <button className={'btn btn-warning btn-xs'} onClick={() => {this.props.removeMessage(index)}}>刪除</button>
 * */
export default class MessageBox extends Component {
    constructor() {
        super();
        this.state = {
            messageList: [
                {name: 'cheng', info: '今天天气不错', createAt: new Date()},
                {name: 'li', info: '什么鬼', createAt: new Date()}
            ]
        }
    }

    // 通过 函数传递到子组件，子组件执行函数，进而传递参数到 父组件去
    addMessage = (message) => {
        // 只要操作状态 就要重新生成一个状态对象，不能在老的状态上面更改
        let messageList = [...this.state.messageList, message];
        this.setState({
            messageList
        })
    }
    removeMessage = (index) => {
        this.state.messageList.splice(index, 1);
        this.setState({
            messageList: [...this.state.messageList]
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className={'text-center'}>组件拆分-组件文件传参-兄弟组件传参</h2>
                            </div>
                            <div className="panel-body">
                                <ul className={'list-group'}>
                                    <MessageList list={this.state.messageList} removeMessage={this.removeMessage}/>

                                </ul>
                            </div>
                            <div className="panel-footer">
                                <MessageForm addMessage={this.addMessage}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}