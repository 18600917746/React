import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
//TODO: 模块引入
import TodoApp from './components/TodoApp/TodoApp'

render(<TodoApp />, window.app);
registerServiceWorker();
