import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from './apollo/configureClient';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

import Header from './components/header';
import Suggestions from './components/suggestions';

import PollGeoLocation from './container/PollGeoLocation';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Router>
                <ApolloProvider client={ApolloClient}>
                    <ReduxProvider store={store}>
                        <div>
                            <Header />

                            <Route exact path="/" component={Suggestions} />

                            <PollGeoLocation />
                        </div>
                    </ReduxProvider>
                </ApolloProvider>
            </Router>
        );
    }
}

export default App;
