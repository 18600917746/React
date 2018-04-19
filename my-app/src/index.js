import React from 'react';
import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
//TODO: 模块引入
import RouterComponent from './components/Router/Router'

render(<RouterComponent />, window.app);
registerServiceWorker();
