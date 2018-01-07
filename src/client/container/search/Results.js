import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import ResultList from '../../components/search/ResultList';

const SearchResultQuery = gql`
    query SearchResults($term: String!, $coordinates: CoordinatesInput!) {
        search(term: $term, coordinates: $coordinates) {
            id
            name
            photos
            location
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
)(ResultList);
