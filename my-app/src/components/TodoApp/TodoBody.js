import React, {Component} from 'react';

export default class TodoBody extends Component {
    checkedAll = (event) => {
        this.props.checkedAll(event.target.checked)
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.list.length > 0 ? <li className={'list-group-item'}>
                    <input type="checkbox" checked={this.props.todosCount === 0} onChange={this.checkedAll}/>全部选中
                </li> : null}
                {this.props.list.map((item, index) => (
                    <li key={index} className={'list-group-item'}>
                        <div className="row">
                            <div className="col-md-1">
                                <input type="checkbox" checked={item.checked}
                                       onChange={() => (this.props.checkedChange(item.id))}/>
                            </div>
                            <div className="col-md-6" style={{textDecoration: item.checked ? 'line-through' : ''}}>
                                {item.title}
                            </div>
                            <div className="col-md-4">
                                {item.time.toLocaleString()}
                            </div>
                            <div className="col-md-1">
                                <button type='button' className={'btn btn-xs btn-warning'}
                                        onClick={() => (this.props.removeItem(index))}>X
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}