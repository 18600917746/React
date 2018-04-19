import React, {Component} from 'react'

export default class UserAdd extends Component {
    handelSubmit = (event) => {
        event.preventDefault();
        let name = this.name.value;
        let age = this.age.value;
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
    };

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="name">姓名</label>
                    <input type="text" name={'name'} ref={ref => this.name = ref} className={'form-control'}/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="age">年龄</label>
                    <input type="text" name={'age'} ref={ref => this.age = ref} className={'form-control'}/>
                </div>
                <div className={'form-group'}>
                    <button type={'submit'} className={'btn btn-primary'}>提交</button>
                </div>
            </form>
        )
    }
}