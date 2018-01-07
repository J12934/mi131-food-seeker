import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Suggestions from './suggestions';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={Suggestions} />
                </div>
            </Router>
        );
    }
}

export default App;
