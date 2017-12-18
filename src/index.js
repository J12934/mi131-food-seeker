import React from 'react';
import ReactDOM from 'react-dom';
import './client/index.css';
import App from './client/App';
import registerServiceWorker from './client/registerServiceWorker';

import io from 'socket.io-client';

const socket = io('/');

socket.emit('search-query', {
    topic: 'Burgers',
    latitude: 121.1231,
    longiditude: 123.1231,
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
