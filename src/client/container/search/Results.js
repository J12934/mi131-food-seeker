import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import Page from '../../components/structure/Page';
import Result from './Result';

function SearchResults({ match, data: { loading, search = [] } }) {
    return (
        <Page>
            {search.map(result => {
                return <Result key={result.id} {...result} />;
            })}
        </Page>
    );
}

const SearchResultQuery = gql`
    query SearchResults($term: String!, $coordinates: CoordinatesInput!) {
        search(term: $term, coordinates: $coordinates) {
            id
            name
            rating
        }
    }
`;

export default compose(
    connect(state => {
        return {
            coordinates: state.geoLocation.coordinates,
        };
    }),
    graphql(SearchResultQuery, {
        options: ({ match, coordinates }) => ({
            variables: { term: match.params.term, coordinates },
        }),
    })
)(SearchResults);
