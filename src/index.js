import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import './client/index.css';
import App from './client/App';
import registerServiceWorker from './client/registerServiceWorker';

const socket = io('/');

socket.emit('query', {
    term: 'Burgers',
    location: 'Kiel',
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
