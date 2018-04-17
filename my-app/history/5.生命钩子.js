import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'

/**
 * TODO： 1.学习 表单的双向绑定
 *        2.表单 值得获取
 *
 */
class Panel extends Component {
    //TODO：构造函数
    constructor() {
        super();
        this.state = {num: 0}
    }

    //TODO: 生命钩子
    componentDidMount() {
        //3.组件挂载完成
        console.log('3.组件挂载完成');
    }

    componentWillMount() {
        //1.组件挂载之前
        console.log('1.组件挂载之前');
    }

    componentWillUpdate() {
        //5.模板更新中
        console.log('5.模板更新中');
    }

    componentDidUpdate() {
        //6.模板更新完毕
        console.log('6.模板更新完毕');
    }

    /**
     * @param {object} newProps 新的属性对象
     * @param {object} newState 新的状态对象
     * */
    shouldComponentUpdate(newProps, newState) {
        //4.组件是否需要更新  返回 true  false 来判断是否进行模板更新
        console.log('4.组件是否需要更新');
        return true;
    }

    //TODO：事件触发的函数
    handleClick = () => {
        //TODO:setState 是异步函数，不能赋值以后立刻获取。可以通过回调进行值的操作！
        this.setState({
            num: this.state.num + 1
        }, () => {
            console.log(this.state.num)
        })
    }

    //TODO：render() 核心方法
    render() {
        //2.组件挂载中
        console.log('2.组件挂载中');
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>+</button>
                <PanelBody num={this.state.num}/>
            </div>
        );
    }
}

class PanelBody extends Component{
    /**
     * @param {object} newProps 子组件要接受新的属性
     * */
    componentWillReceiveProps(newProps){
        console.log('7.子组件要接受新的属性');
    }
    render(){
        return(
            <div>
                {this.props.num}
            </div>
        )
    }
}


// 属性的传递  this.props.属性名
render(<Panel/>, window.app);

registerServiceWorker();
