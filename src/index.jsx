import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecisionApp';

import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
