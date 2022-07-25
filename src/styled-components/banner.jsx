import styled from 'styled-components';
import { Grid, GridColumn } from './layouts';
import { rem, em } from '../helpers/units';


export const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const BannerGrid = styled(Grid)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    grid-template-columns: 1fr 1fr;
    backdrop-filter: blur(${em(32)});
`;


export const BannerImage = styled.img`
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const BannerPosterColumn = styled(GridColumn)`
    grid-column: 1;
    z-index: -1;
    display: flex;
    place-items: center;
    place-content: center;
`;

export const BannerPoster = styled.img`
    width: 40%;
    height: auto;
    border-radius: ${em(8)};
    object-fit: contain;
    z-index: 2;
`;

export const BannerDetailColumn = styled(GridColumn)`
    display: flex;
    flex-direction: column;
    place-content: center;
    gap: ${rem(16)};
    padding: ${rem(16)} ${rem(24)};

    h1 {
        font-size: clamp(${rem(32)}, 5vw, ${rem(56)});
        line-height: 1;
    }

    p {
        width: 50ch;
        font-family: inherit;
        font-weight: 300;
        text-shadow: 0px 2px 8px rgba(0,0,0,0.6);
        line-height: 1.8;
    }
`;