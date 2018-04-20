import React, {Component} from 'react'
import {
    BrowserRouter, //路由容器
    Route,//单条路由 可以可同时匹配显示多条  exact 严格匹配 link//路由标签  a
    Switch //单路由的显示 一旦有匹配模块就不在向下匹配
} from 'react-router-dom'
//路由文件引入
import User from '../RouterNav/User'
import Home from '../RouterNav/Home'
import Profile from '../RouterNav/Profile'
/**
 *TODO： compomemt 与 render 的区别
 * component 是 当路径与path匹配时就立刻进行渲染
 * render 是 执行 匿名组件箭头函数执行一些操作 当路径与path匹配时就立刻进行渲染
 */

/**
 * TODO: 用户是否登录 路由判断
 *      先声明一个自定义的模板  将 path component 传递给子组件 将当前路径传递过去，登录完成立即调回本页
 *      子组件使用函数 进行路由判断
 * */
import ProtectedRouter from '../RouterNav/ProtectedRouter'
import Login from '../RouterNav/Login'

/**
 * 当前点击路由按钮的选中项
 *
 */
import LinkActive from '../RouterNav/LinkActive'
/**
 *TODO: 404 页面的匹配实现
 *
 */
import NotFound from '../RouterNav/NotFound'

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
                                <LinkActive to={'/home'} label={'首页'}/>
                                <LinkActive to={'/user'} label={'用户管理'}/>
                                <LinkActive to={'/profile'} label={'个人设置'}/>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Switch>
                                    <Route exact path={'/'} render={() => (<div>使用 exact 严格匹配的路由 </div>)}/>
                                    <Route path={'/user'} component={User}/>
                                    <Route path={'/home'} component={Home}/>
                                    <Route path={'/login'} component={Login}/>
                                    <ProtectedRouter path={'/profile'} component={Profile}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </div>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}