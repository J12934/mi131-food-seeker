import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    addCategory,
    removeCategory,
} from '../../redux/modules/SearchParameter';

import Page from '../../components/structure/Page';
import styled from 'styled-components';

const CenterPage = Page.extend`
    text-align: center;
`;
const categories = [
    'Italian',
    'Chinese',
    'Burger',
    'Pizza',
    'Pasta',
    'Mexian',
    'Fast Food',
    'Indian',
    'Thai',
];

const CheckboxRow = styled.label`
    display: block;
    margin-bottom: 16px;
`;

const Checkbox = ({ name, onChange }) => {
    const callOnChange = ({ target }) => {
        onChange(name, target.checked);
    };

    return (
        <CheckboxRow>
            <input type="checkbox" onChange={callOnChange} />
            {name}
        </CheckboxRow>
    );
};

class CategoriesChooserScreen extends Component {
    checkboxChanged = (name, value) => {
        if (value) {
            this.props.addCategory(name);
        } else {
            this.props.removeCategory(name);
        }
    };

    render() {
        return (
            <CenterPage>
                <h1>Categories</h1>
                {categories.map(catagory => (
                    <Checkbox
                        key={catagory}
                        name={catagory}
                        onChange={this.checkboxChanged}
                    />
                ))}
            </CenterPage>
        );
    }
}

export default connect(
    state => {
        return { categories: state.searchParameter.categories };
    },
    dispatch => {
        return {
            addCategory: category => {
                dispatch(addCategory(category));
            },
            removeCategory: category => {
                dispatch(removeCategory(category));
            },
        };
    }
)(CategoriesChooserScreen);
