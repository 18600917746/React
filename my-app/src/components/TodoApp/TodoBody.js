import React, {Component} from 'react';

export default class TodoBody extends Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.list.map((item, index) => (
                    <li key={index} className={'list-group-item'}>
                        <div className="row">
                            <div className="col-md-1">
                                <input type="checkbox"/>
                            </div>
                            <div className="col-md-10">
                                {item}
                            </div>
                            <div className="col-md-1">
                                <button type='button' className={'btn btn-xs btn-warning'}>X</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}