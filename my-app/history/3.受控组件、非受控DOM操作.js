import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

/**
 * TODO： 1.学习 表单的双向绑定
 *        2.表单 值得获取
 *
 */
class Input extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            result: 0
        }
    }

    inputA = (event) => {
        let a = Number(event.target.value);
        let b = Number(this.state.b)
        this.setState({
            a,
            result: a + b
        })

    }
    inputB = (event) => {
        let b = Number(event.target.value);
        let a = Number(this.state.a)
        this.setState({
            b,
            result: a + b
        })
    }
    uninput = (event) => {
        let uninputA = this.refs.uninputA.value;
        let uninputB = this.refs.uninputB.value;
        this.refs.result.value = parseInt(uninputA || 0) + parseInt(uninputB || 0);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>受控组件的属性操作</h1>
                    <input type="text" onChange={this.inputA} value={this.state.a}/>+
                    <input type="text" onChange={this.inputB} value={this.state.b}/>=
                    <input type="text" value={this.state.result}/>
                </div>
                <div onChange={this.uninput}>
                    <h1>非受控组件的节点操作</h1>
                    <input type="text" ref={'uninputA'}/>
                    <input type="text" ref={'uninputB'}/>
                    <input type="text" ref={'result'}/>
                </div>
            </div>

        );
    }
}

// 属性的传递  this.props.属性名
render(<Input/>, window.app);

registerServiceWorker();
