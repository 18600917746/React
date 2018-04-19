import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class UserList extends Component {
    render() {
        let users = localStorage.getItem('users');
        let userList = users ? JSON.parse(users) : [];     
        return (
            <ul className={'list-group'}>
                {
                    userList.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            <Link to={"/user/detail/" + (item.id)}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}