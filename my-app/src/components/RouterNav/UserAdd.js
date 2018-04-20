import React, {Component} from 'react'
import {Prompt} from 'react-router-dom'

/**
 * TODO: Prompt  是一个 路由切换的 提示  用于误操作的 判断
 */
export default class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: false
        }
    }

    handelChange = () => {
        let name = this.name.value;
        let age = this.age.value;
        this.setState({
            blocking: name !== '' || age !== ''
        })
    }
    handelSubmit = (event) => {
        event.preventDefault();
        let name = this.name.value;
        let age = this.age.value;
        if (name && age) {
            this.setState({
                blocking: false
            }, () => {
                //    第一种 存储在 localStorage 中
                let users = localStorage.getItem('users');
                let userList = users ? JSON.parse(users) : [];
                userList.push({
                    id: Date.now(),
                    name,
                    age
                });
                localStorage.setItem('users', JSON.stringify(userList));
                this.props.history.push('/user/list');
            })

        }
    };

    render() {
        return (
            <div>
                <Prompt when={this.state.blocking}
                        message={(location) => `你要放弃当前操作，跳转到${location.pathname}页面吗`}></Prompt>
                <form onSubmit={this.handelSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="name">姓名</label>
                        <input type="text" name={'name'} onChange={this.handelChange} ref={ref => this.name = ref}
                               className={'form-control'}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="age">年龄</label>
                        <input type="text" name={'age'} onChange={this.handelChange} ref={ref => this.age = ref}
                               className={'form-control'}/>
                    </div>
                    <div className={'form-group'}>
                        <button type={'submit'} className={'btn btn-primary'}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}