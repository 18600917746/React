import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
//TODO: 模块引入
import Slider from './components/Slider/Slider'

let IMAGE_DATA = [
    {
        src: require('./images/1.jpg')
    }, {
        src: require('./images/2.jpg')
    }, {
        src: require('./images/3.jpg')
    }, {
        src: require('./images/4.jpg')
    }
];
/**
 * @param {Array} item 图片的路径
 * @param {Float} seed 图片的切换速度
 * @param {Float} depaly 图片的切换间隔时间
 * @param {Boolean} pause 鼠标滑过是否暂停
 * @param {Boolean} auto 初始化是否自动切换
 * @param {Boolean} dots 是否显示焦点
 * @param {Boolean} arrows 是否显示左右切换按钮
 * */
render(<Slider item={IMAGE_DATA}
               seed={1.2}
               depaly={2.1}
               pause={false}
               auto={true}
               dots={true}
               arrows={true}/>, window.app);
registerServiceWorker();
