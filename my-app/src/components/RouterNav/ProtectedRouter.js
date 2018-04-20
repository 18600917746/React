import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function ({component: Component, ...rest}) {
    return <Route {...rest} render={(props) => (
        localStorage.getItem('login') ? <Component/> : <Redirect to={
            {
                pathname: '/login',
                state: {
                    from: props.location.pathname //将当前路由地址传递给登录页面 登录以后还要跳转回来
                }
            }
        }/>)
    }/>
}