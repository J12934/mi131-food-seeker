import React from 'react';
import Page from '../../components/structure/Page';
import styled from 'styled-components';

const CenterPage = Page.extend`
text-align:center;
`
const categories = ['Italian','Chinese', 'Burger', 'Pizza', 'Pasta', 'Mexian', 'Fast Food', 'Indian', 'Thai'];

const CheckboxRow = styled.label`
    display: block;
    margin-bottom: 16px;
`;

const Checkbox = ({name}) => {
    return (
        <CheckboxRow>
            <input type="checkbox"/>
            {name}
        </CheckboxRow>
    )
}
export default function CategoriesChooserScreen() {
    return (
        <CenterPage>
            <h1>Categories</h1>
            {categories.map(catagory =>(
                <Checkbox key={catagory} name = {catagory} />
            ))}
        </CenterPage>
    );
}