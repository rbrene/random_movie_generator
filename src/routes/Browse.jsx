import React from 'react';
import { BrowseRoute, BrowseBannerContainer } from '../styled-components/routes/browse';
import Banner from '../components/Banner';


export default function Browse() {
    return (
        <BrowseRoute id="browse">
            <BrowseBannerContainer>
                <Banner />
            </BrowseBannerContainer>
        </BrowseRoute>
    )
}