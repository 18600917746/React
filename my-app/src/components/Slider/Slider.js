import React, {Component} from 'react'
import './Slider.css'

export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    go = () => {
        this.$timer = setInterval(() => {
            this.turn(1);
        }, this.props.depaly * 1000);

    }

    componentDidMount() {
        this.$slider = document.querySelector('.sliders');
        //跟进参数 是否开启自动轮播
        if (this.props.auto) {
            this.go();
        }
    }

    //根据步长得到新得index 值
    turn = (step) => {
        let index = this.state.index + step;
        if (index > this.props.item.length) {
            this.$slider.style.transitionDuration = '0s';
            this.$slider.style.left = 0 + 'px';
            setTimeout(() => {
                index = 1;
                this.$slider.style.transitionDuration = this.props.seed + 's';
                this.setState({index})
            }, 0);

            return;
        } else if (index < 0) {
            this.$slider.style.transitionDuration = '0s';
            this.$slider.style.left = -500 * this.props.item.length + 'px';
            setTimeout(() => {
                index = this.props.item.length - 1;
                this.$slider.style.transitionDuration = this.props.seed + 's';
                this.setState({index})
            }, 0);

            return;
        }
        this.setState({
            index
        })
    }

    render() {
        let style = {
            width: (this.props.item.length + 1) * 500,
            left: this.state.index * -500,
            transitionDuration: this.props.seed + 's'
        }
        return (
            <div className='slider-wapper'
                 onMouseOver={() => (clearInterval(this.$timer))}
                 onMouseOut={() => (this.go())}>
                <ul className="sliders" style={style}>
                    {
                        this.props.item.map((item, index) => (
                            <li className={'slider'} key={index}><img src={item.src} alt=""/></li>
                        ))
                    }
                    <li className={'slider'} key={this.props.item.length}><img src={this.props.item[0].src} alt=""/>
                    </li>
                </ul>
                <div className="slider-arrows">
                    <span className={'arrow arrow-left'} onClick={() => this.turn(-1)}>&lt;</span>
                    <span className={'arrow arrow-right'} onClick={() => this.turn(1)}>&gt;</span>
                </div>
                <div className={'slider-dots'}>
                    {
                        this.props.item.map((item, index) => (
                            <span key={index} onClick={() => (this.turn(index - this.state.index))}
                                  className={'dot ' + (index === this.state.index || (this.state.index === this.props.item.length && index === 0) ? 'docActive' : '')}></span>
                        ))
                    }
                </div>
            </div>
        )
    }
}