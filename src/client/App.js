import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from './apollo/configureClient';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

import Header from './components/header';
import Suggestions from './container/Suggestions';
import SearchResults from './container/search/Results';

import PollGeoLocation from './container/PollGeoLocation';

const store = configureStore();

const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

class App extends Component {
    render() {
        return (
            <Router>
                <ApolloProvider client={ApolloClient}>
                    <ReduxProvider store={store}>
                        <AppContainer>
                            <Header />

                            <Route exact path="/" component={Suggestions} />
                            <Route
                                path="/search/:term"
                                component={SearchResults}
                            />

                            <PollGeoLocation />
                        </AppContainer>
                    </ReduxProvider>
                </ApolloProvider>
            </Router>
        );
    }
}

export default App;
