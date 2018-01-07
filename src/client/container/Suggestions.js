import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import Suggestions from '../components/suggestions';

const SearchSuggestions = gql`
    query SearchSuggestions($coordinates: CoordinatesInput!) {
        searches(coordinates: $coordinates)
    }
`;

export default compose(
    connect(state => {
        return {
            tracking: state.geoLocation.tracking,
            coordinates: state.geoLocation.coordinates,
        };
    }),
    graphql(SearchSuggestions)
)(Suggestions);
