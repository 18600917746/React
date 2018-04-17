import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

/**
 * TODO: ()=>() 相对于 ()=>{} 不需要书写 return 进行直接输出
 * 1.使用 map() 函数 输出 数组 数据 并添加 key
 * */

export default class Suggest extends Component {
    constructor() {
        super();
        //凡是需要改变的值 都使用状态去绑定它
        this.state = {
            list: [],
            name: ''
        }
    }

    //通过生命钩子接收组件文件传递的值
    componentDidMount() {
        this.setState({
            name: this.props.name
        })
    }

    //通过事件记录值
    handleClick = (event) => {
        let val = event.target.value;
        this.setState({
            name: val
        })
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
                                    <input type="text" onChange={this.handleClick} value={this.state.name}
                                           className='form-control'/>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        {
                                            this.state.list.map((item, index) => (
                                                <li key={index} className='list-group-item'>{item}</li>
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
