import React, {Component} from 'react';
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'

/**
 * 全选判断，值的获取，元素的显示隐藏
 * **/
export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    addTodoList = (val) => {
        //Todo：对象的合并 Es5
        if (val) {
            this.setState({
                checkedAll: false,
                list: [
                    {
                        id: Date.now(),
                        title: val, time: new Date(),
                        checked: false
                    },
                    ...this.state.list
                ]
            })
        }

    }
    checkedChange = (id) => {
        let list = this.state.list.map((item) => {
            if (item.id === id) {
                item.checked = !item.checked
            }
            return item;
        })
        this.setState({
            list
        })
    }
    removeItem = (index) => {
        this.state.list.splice(index, 1);
        this.setState({
            list: this.state.list
        })
    }
    checkedAll = (checked) => {
        let list = this.state.list.map((item, index) => {
            item.checked = checked;
            return item;
        })
        this.setState({
            list
        })
    }

    render() {
        let todos = this.state.list;
        let todosCount = todos.reduce((count, todo) => {
            return count + (todo.checked ? 0 : 1);
        }, 0);
        return (
            <div className="container" style={{marginTop: 20}}>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className={'panel panel-default'}>
                            <div className="panel-heading">
                                <TodoHeader addTodoList={this.addTodoList}/>
                            </div>
                            <div className="panel-body">
                                <TodoBody list={this.state.list} checkedChange={this.checkedChange}
                                          removeItem={this.removeItem}
                                          checkedAll={this.checkedAll}
                                          todosCount={todosCount}/>
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}