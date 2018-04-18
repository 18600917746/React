import React, {Component} from 'react'

/**
 * TODO: ref 的 第二种技巧  ref={x => this.username = x} x为形参 将自身对象传递给 this属性
 * */
export default class MessageForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        //通过 ref 将自身传递给 MessageForm 实例的一个属性上
        let name = this.username.value;
        let info = this.content.value;
        this.props.addMessage({name, info, createAt: new Date()})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名：</label>
                    <input type="text" ref={(x)=>{this.username = x}} id={'username'} className={'form-control'}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label">内容：</label>
                    <input type="text" ref={(x)=>{this.content = x}} id="content" className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">留 言</button>
                </div>
            </form>
        )
    }
}