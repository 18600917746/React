import React, {Component} from 'react'
import {
    BrowserRouter, //路由容器
    Route,//单条路由
    Link//路由标签  a
} from 'react-router-dom'
//路由文件引入
import User from '../RouterNav/User'
import Home from '../RouterNav/Home'
import Profile from '../RouterNav/Profile'

//声明式路由注册  路由盒子内需要加入一个容器进行包裹
// router 4.x 中 可以同时显示多个路由路径
export default class RouterComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navber-header">
                                <div className="navbar-brand">
                                    用户管理系统
                                </div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to={'/home'}>首页</Link></li>
                                <li><Link to={'/user'}>用户管理</Link></li>
                                <li><Link to={'/profile'}>个人设置</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Route path={'/user'} component={User}/>
                                <Route path={'/home'} component={Home}/>
                                <Route path={'/profile'} component={Profile}/>
                            </div>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}