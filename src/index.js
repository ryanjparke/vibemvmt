import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux'; //becomes aware of state / store
import store from './store';

ReactDOM.render(
<Provider store={ store } >
    <App />
    </Provider>, 
    document.getElementById('root'));
unregister();
