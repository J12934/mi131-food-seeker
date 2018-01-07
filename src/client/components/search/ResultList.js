import React from 'react';
import Page from '../structure/Page';
import Result from './Result';

const ResultPage = Page.extend`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

function ResultList({ results }) {
    return results.map(result => {
        return <Result key={result.id} {...result} />;
    });
}

function SearchResults({ match, data: { loading, search = [] } }) {
    return (
        <ResultPage>
            <ResultList results={search} />
        </ResultPage>
    );
}

export default SearchResults;
