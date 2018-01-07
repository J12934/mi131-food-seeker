import React from 'react';
import { mount } from 'enzyme';

import Suggestion, { SuggestionsList } from './';

const defaultData = {
    loading: false,
    searches: [],
};

describe('Suggestion', () => {
    it('Renders message that suggestions are shown for kiel if tracking is false', () => {
        const wrapper = mount(
            <Suggestion data={defaultData} tracking={false} />
        );

        expect(
            wrapper.contains(
                'Here are some things people in Kiel were searching for:'
            )
        ).toBe(true);
    });

    it('Renders message that suggestions are shown for current location if tracking is false', () => {
        const wrapper = mount(
            <Suggestion data={defaultData} tracking={true} />
        );

        expect(
            wrapper.contains(
                'Here are some things people around you were searching for:'
            )
        ).toBe(true);
    });

    it('Renders message that suggestions are shown for current location if tracking is false', () => {
        const wrapper = mount(
            <Suggestion data={defaultData} tracking={true} />
        );

        expect(
            wrapper.contains(
                'Here are some things people around you were searching for:'
            )
        ).toBe(true);
    });

    it('Renders suggestions as paragraphs', () => {
        const wrapper = mount(
            <Suggestion
                data={{ ...defaultData, searches: ['Burger', 'Pizza'] }}
                tracking={true}
            />
        );

        expect(wrapper.contains('Burger')).toBe(true);
        expect(wrapper.contains('Pizza')).toBe(true);
    });

    it('Renders loading message when loading is set to true', () => {
        const wrapper = mount(
            <Suggestion
                data={{ ...defaultData, loading: true }}
                tracking={true}
            />
        );

        expect(wrapper.contains('Loading')).toBe(true);
    });
});
