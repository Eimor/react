import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import registerServiceWorker from './registerServiceWorker';
import StepsContainer from './components/StepsContainer';

ReactDOM.render(<StepsContainer/>, document.getElementById('root'));
registerServiceWorker();
