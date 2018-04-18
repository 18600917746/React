import React, {Component} from 'react'

export default class MessageList extends Component {

    render() {
        return (
            this.props.list.map((item, index) => (
                    <li className={'list-group-item'}
                        key={index}>姓名:{item.name}---信息:{item.info}
                        <button className={'btn btn-warning btn-xs'} onClick={() => {
                            this.props.removeMessage(index)
                        }}>刪除
                        </button>
                        <span className={'pull-right'}>{item.createAt.toLocaleString()}</span></li>
                )
            )
        )
    }
}