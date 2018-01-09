import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import ResultList from '../../components/search/ResultList';

const SearchResultQuery = gql`
    query SearchResults($term: String!, $coordinates: CoordinatesInput!, $categories: [String!]) {
        search(term: $term, coordinates: $coordinates, categories: $categories) {
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
            categories: state.searchParameter.categories,
        };
    }),
    graphql(SearchResultQuery, {
        options: ({ match, coordinates, categories }) => ({
            variables: { term: match.params.term, coordinates, categories},
        }),
    })
)(ResultList);
