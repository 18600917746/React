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

    render() {
        return (
            <div>
                <input type="text" onChange={this.inputA} value={this.state.a}/>+
                <input type="text" onChange={this.inputB} value={this.state.b}/>=
                <input type="text" value={this.state.result}/>
            </div>
        );
    }
}

// 属性的传递  this.props.属性名
render(<Input/>, window.app);

registerServiceWorker();
