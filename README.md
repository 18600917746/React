# 基础
>安装 cli

    cnpm install -g create-react-app
> 创建项目

    create-react-app my-react
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

> 组件
>> 受控组件

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

>> 非受控组件 - DOM 节点操作

    uninput = (event) => {
        let uninputA = this.refs.uninputA.value;
        let uninputB = this.refs.uninputB.value;
        this.refs.result.value = parseInt(uninputA || 0) + parseInt(uninputB || 0);
    }
     <div onChange={this.uninput}>
         <h1>非受控组件的节点操作</h1>
         <input type="text" ref={'uninputA'}/>
         <input type="text" ref={'uninputB'}/>
         <input type="text" ref={'result'}/>
     </div>

>> 复合组件

    react 是单向数据流，只能父类传给子类 this.porps 传递

## 生命钩子
> 组件挂载之前

##  组件传参
>  所有组件的数据只能由父类派发，不能向上，不能隔代。

>   若是想同级传参或传给父类，只能通过父类派发函数，子类触发进行参数传递 


