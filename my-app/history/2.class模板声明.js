import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

/**
 * TODO： 1.学习 用 class 声明模板
 *        2.学习 声明默认属性
 *        3.学习 属性的传递，props的使用
 *        4.学习 propsType 的声明，以及属性参数的使用
 *        5.学习 生命钩子的使用
 *        6.学习 React 状态的声明，以及使用
 *        7.学习 事件的初步认识 执行函数
 *
 */
// 模板声明的第二种方式
class Clock extends Component {
    //默认属性
    static defaultProps = {
        name: '默认属性',
        age: 1
    }
    //属性 类型与是否必传
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    constructor() {
        super();
        //状态只能内部声明，内部引用,用于操作可以改变的值
        this.state = {
            time: new Date().toLocaleString(),
            happy: true
        }
    }

    //模板生命钩子
    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        }, 1000);
    }

    //函数
    changeFun = () => {
        this.setState({
            happy: !this.state.happy
        })
    }

    render() {
        let sta = this.state.happy ? '开心' : '难过';
        return (
            <div>
                <h2>{this.state.time}</h2>
                <h2>{this.props.name}</h2>
                <h2>心情：{sta}</h2>
                <button onClick={this.changeFun}>改变</button>
            </div>
        )
    }
}

// 属性的传递  this.props.属性名
render(<Clock name={"传递的属性"}/>, window.app);

