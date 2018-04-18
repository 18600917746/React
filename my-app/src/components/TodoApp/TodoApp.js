import React, {Component} from 'react';
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    addTodoList = (val) => {
        this.setState({
            list: [...this.state.list, val]
        })
    }

    render() {
        return (
            <div className="container" style={{marginTop: 20}}>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className={'panel panel-default'}>
                            <div className="panel-heading">
                                <TodoHeader addTodoList={this.addTodoList}/>
                            </div>
                            <div className="panel-body">
                                <TodoBody list={this.state.list}/>
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