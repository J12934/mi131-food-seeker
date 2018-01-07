import React from 'react';
import styled from 'styled-components';
import isArray from 'lodash/isArray';

import Page from '../structure/Page';

const CenterContent = Page.extend`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
`;

const SlimParagraph = styled.p`
    max-width: 250px;
    margin: 8px 0;
`;

const SuggestionsList = ({ loading, suggestions }) => {
    if (isArray(suggestions) && suggestions.length === 0) {
        return (
            <SlimParagraph>
                Mhh. You appear to be the first in this area to be using this
                app. Start searching for things and they will start appearing
                here!
            </SlimParagraph>
        );
    } else if (loading) {
        return <p>Loading</p>;
    }

    return suggestions.map(suggestion => (
        <SlimParagraph key={suggestion}>{suggestion}</SlimParagraph>
    ));
};

export default function Suggestions({ tracking, data: { loading, searches } }) {
    return (
        <CenterContent>
            <SlimParagraph>
                <strong>Need suggestions?</strong>
            </SlimParagraph>
            <SlimParagraph>
                {tracking
                    ? 'Here are some things people around you were searching for:'
                    : 'Here are some things people in Kiel were searching for:'}
            </SlimParagraph>

            <SuggestionsList loading={loading} suggestions={searches} />
        </CenterContent>
    );
}
