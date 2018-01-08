import React from 'react';
import { mount } from 'enzyme';

import Suggestion, { SuggestionsList } from './';

const defaultData = {
    loading: false,
    searches: [],
};

describe('Suggestion', () => {
    it('Renders message that suggestions are shown for kiel if locationFixed is false', () => {
        const wrapper = mount(
            <Suggestion data={defaultData} locationFixed={false} />
        );

        expect(
            wrapper.contains(
                'Here are some things people in Kiel were searching for:'
            )
        ).toBe(true);
    });

    it('Renders message that suggestions are shown for current location if locationFixed is false', () => {
        const wrapper = mount(
            <Suggestion data={defaultData} locationFixed={true} />
        );

        expect(
            wrapper.contains(
                'Here are some things people around you were searching for:'
            )
        ).toBe(true);
    });

    it('Renders message that suggestions are shown for current location if locationFixed is false', () => {
        const wrapper = mount(
            <Suggestion data={defaultData} locationFixed={true} />
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
                locationFixed={true}
            />
        );

        expect(wrapper.contains('Burger')).toBe(true);
        expect(wrapper.contains('Pizza')).toBe(true);
    });

    it('Renders loading message when loading is set to true', () => {
        const wrapper = mount(
            <Suggestion
                data={{ ...defaultData, loading: true }}
                locationFixed={true}
            />
        );

        expect(wrapper.contains('Loading')).toBe(true);
    });
});
