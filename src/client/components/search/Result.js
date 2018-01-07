import React from 'react';
import styled from 'styled-components';

const CoverPhoto = styled.div`
    width: 100%;
    height: 200px;
    background-image: url("${({ url }) => url}");
    background-size: cover;
`;

const RestaurantDescription = styled.div`
    padding: 16px;
`;

const RestaurantName = styled.strong`
    font-size: 24px;
    font-weight: semi-bold;
`;

export default function Result({ id, name, photos = [], location, rating }) {
    const [coverPhoto] = photos;

    return (
        <div>
            <CoverPhoto url={coverPhoto} />
            <RestaurantDescription>
                <RestaurantName>{name}</RestaurantName>
                <p>{location}</p>
                <p>{rating} Stars</p>
            </RestaurantDescription>
        </div>
    );
}
