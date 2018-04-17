import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
/**
 * TODO： 1.单向数据流-数据传递
 *        2.数据只能 父 -> 子 不能反向，不能越级
 *        3.复合组件的使用
 *
 */
class Panel extends Component {
    constructor(){
        super();
        this.state={color:'#fff'}
    }
    render() {
        return (
            <div className='panel panel-default'>
                <button onClick={()=>{this.setState({color:'red'})}}>红</button>
                <button onClick={()=>{this.setState({color:'green'})}}>绿</button>
                <PanelHader header={this.props.header} color={this.state.color} />
                <PanelBody body={this.props.body} color={this.state.color} />
                <PanelFooter footer={this.props.footer} color={this.state.color} />
            </div>

        );
    }
}

class PanelHader extends Component {
    render() {
        return (
            <div className='panel-heading' style={{color:this.props.color}}>
                {this.props.header}
            </div>

        );
    }
}

class PanelBody extends Component {
    render() {
        return (
            <div className='panel-body' style={{color:this.props.color}}>
                {this.props.body}
            </div>

        );
    }
}

class PanelFooter extends Component {
    render() {
        return (
            <div className='panel-footer' style={{color:this.props.color}}>
                {this.props.footer}
            </div>

        );
    }
}

// 属性的传递  this.props.属性名
render(<Panel header={'头'} body={'体'} footer={'尾'}/>, window.app);

registerServiceWorker();
