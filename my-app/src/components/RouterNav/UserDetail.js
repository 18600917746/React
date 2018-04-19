import React, {Component} from 'react'

export default class UserDetail extends Component {
    render() {
        //获取动态路由的值
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        let users = localStorage.getItem('users');
        let userList = users ? JSON.parse(users) : [];
        let user = userList.find(user => user.id == id);
        return (
            <div>
                ID：{user.id}
                姓名：{user.name}
                年龄：{user.age}
            </div>
        )
    }
}