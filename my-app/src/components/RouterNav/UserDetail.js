import React, {Component} from 'react'


export default class UserDetail extends Component {
    render() {
        //获取动态路由的值
        let id = this.props.match.params.id;
        let users = localStorage.getItem('users');
        let userList = users ? JSON.parse(users) : [];
        let user = userList.find(user => String(user.id) === id);
        return (
            <table className={'table table-hover text-center '}>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>姓名</td>
                    <td>年龄</td>
                </tr>
                </thead>
                <tbody>
                {
                    user ? <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr> : <tr>
                        <td></td>
                        <td>暂无数据</td>
                        <td></td>
                    </tr>
                }
                </tbody>
            </table>
        )
    }
}