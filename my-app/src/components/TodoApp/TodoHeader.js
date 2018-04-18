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
        }

    }
    handelChange = (event) => {
        let val = event.target.value;

        this.setState({
            val
        })
        console.log(this.state.val);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input autoFocus={true} onKeyDown={this.handelKeyDown} onChange={this.handelChange} type="text"
                           className={'form-control'} value={this.state.val}/>
                </div>
            </form>
        )
    }
}