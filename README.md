# 基础
>安装 cli

    cnpm install -g create-react-app
> 启动服务

    npm start

#jsx -
> ReactDOM.render() 的原理

    jsx => babel + react构造 = js节点对象 => ReactDOM.render() = dom元素插入页面
> 数组转化 dom 节点

    let arrList = ['a', 'b', 'c', 'd'];
     arrList.map(function (item,index) {
            return  <span style={{background:'red'}}  key={index}>{item+':-----------'+index}</span>
        })
> 内联 style

    <span style={{background:'red'}}  key={index}>{item+':-----------'+index}</span>

#组件
> 组件的声明

    定义的第一种方式- 函数式
    函数式模板就是 返回DOM元素-通过ReactDom转化为Dom结构，然后在插值会目标节点
    1. 模板名称 首字母必须大写
    2.函数参数的结构赋值
    /**
     * @param {object} arguments -props属性对象
     * */
    let Fun=({msg,style})=>{
        return <h1 chil={msg} style={style}>{msg}</h1>
    };
    render(<Fun msg='111' style={{color:'red'}}/>, window.app);
    // 模板声明的第二种方式
    class Clock extends Component {
        constructor() {
            super();
            //状态只能内部声明，内部引用,用于操作可以改变的值
            this.state = {time: new Date().toLocaleString()}
        }
        //模板生命钩子
        componentDidMount() {
            window.setInterval(function () {
                this.setState({time: new Date().toLocaleString()})
            }.bind(this), 1000);
        }
        render() {
            return <div>
                <h2>{this.state.time}</h2>
                <h2>hello</h2>
            </div>
        }
    }
    render(<Clock/>, window.app);

> 组件属性
>> 默认属性

    static defaultProps={
        name:'默认属性',
        age:1
    }

>> 属性 类型与是否必传

    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }

>> 状态管理

    class Clock extends Component {
        constructor() {
            super();
            //状态只能内部声明，内部引用,用于操作可以改变的值
            this.state = {time: new Date().toLocaleString()}
        }
        //模板生命钩子
        componentDidMount() {
            window.setInterval(function () {
                this.setState({time: new Date().toLocaleString()})
            }.bind(this), 1000);
        }

        render() {
            return <div>
                <h2>{this.state.time}</h2>
                <h2>{this.props.name}</h2>
            </div>
        }
    }

# 事件
