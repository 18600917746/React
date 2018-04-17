import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'

//TODO: 模块引入
import Suggest from './components/Suggest'

render(<Suggest name={'跨文件传输'}/>, window.app);
registerServiceWorker();
