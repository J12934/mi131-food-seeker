import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.emit('search-query', {
    topic: 'Burgers',
    latitude: 121.1231,
    longiditude: 123.1231,
});

socket.on('search-query', function(params) {
    alert('Event');
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
