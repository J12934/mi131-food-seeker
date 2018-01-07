import styled from 'styled-components';

const FormInputType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    background-color: #fafafa;
    border: none;
    border-radius: 2px;
    padding: 12px;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.15);
    transition: 200ms ease-in-out background-color;
    transition: 200ms ease-in-out transform;

    :hover {
        background-color: #f3f0f0;
        transform: scale(1.03);
    }
`;

export const Input = FormInputType.withComponent('input').extend`
    font-size: 24px;
    font-weight: bold;
`;

export const Button = FormInputType.withComponent('button').extend`
    font-size: 14px;
    font-weight: semi-bold;
    cursor: pointer;
`;
