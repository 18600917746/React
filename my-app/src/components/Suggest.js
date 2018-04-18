import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import jsonp from 'jsonp'

/**
 * TODO: ()=>() 相对于 ()=>{} 不需要书写 return 进行直接输出
 * 1.使用 map() 函数 输出 数组 数据 并添加 key
 * 2.使用第三方jsonp模块
 * 3.事件使用
 * */

export default class Suggest extends Component {
    constructor() {
        super();
        //凡是需要改变的值 都使用状态去绑定它
        this.state = {
            list: [],
            name: '',
            index: -1
        }
    }

    //通过生命钩子接收组件文件传递的值
    componentDidMount() {
        this.setState({
            name: this.props.name
        })
        jsonp(`http://www.baidu.com/su?wd=${this.props.name}`, {
            param: 'cb'
        }, (error, res) => {
            this.setState({
                list: res.s
            })

        })
    }

    //通过事件记录值
    handleChange = (event) => {
        let val = event.target.value;
        //缓存初始值
        this.val = val;
        this.setState({
            name: val
        })
        jsonp(`http://www.baidu.com/su?wd=${val}`, {
            param: 'cb'
        }, (error, res) => {
            this.setState({
                list: res.s
            })

        })
    }

    handleKeyDown = (event) => {

        let keyCode = event.keyCode;
        if (keyCode === 40 || keyCode === 38) {
            let index = this.state.index;
            if (keyCode === 38) {
                index--;
            } else if (keyCode === 40) {
                index++;
            }
            if (index === -2) {
                index = this.state.list.length - 1;
            } else if (index === this.state.list.length) {
                index = -1;
            }
            let val = this.val || this.props.name;
            let name = index === -1 ? val : this.state.list[index];

            this.setState({
                index,
                name
            })
        } else if (keyCode === 13) {
            window.location.href = `http://www.baidu.com/s?wd=${event.target.value}`
        }


    }

    //渲染页面
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-hading">
                                    <input type="text"
                                           ref='input'
                                           onChange={this.handleChange}
                                           onKeyDown={this.handleKeyDown}
                                           value={this.state.name}
                                           className='form-control'/>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        {
                                            this.state.list.map((item, index) => (
                                                <li key={index}
                                                    className={'list-group-item ' + (index === this.state.index ? 'active' : '')}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
