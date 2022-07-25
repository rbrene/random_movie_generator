import styled from 'styled-components';
import { Container } from './index';


export const Grid = styled(Container)`
    display: grid;
`;

export const GridColumn = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;