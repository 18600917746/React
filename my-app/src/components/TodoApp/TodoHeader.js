import React, {Component} from 'react';

export default class TodoHeader extends Component {
    constructor() {
        super();
        this.state = {
            val: ''
        }
    }

    handelKeyDown = (event) => {
        let keycode = event.keyCode;
        let val = event.target.value;
        if (keycode === 13) {
            event.preventDefault();
            this.props.addTodoList(val);
            event.target.value = '';
        }

    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input autoFocus={true} onKeyDown={this.handelKeyDown} type="text"
                           className={'form-control'}/>
                </div>
            </form>
        )
    }
}