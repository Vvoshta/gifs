import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)`
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    margin-top: -16px;
    width: calc(100% + 16px);
    margin-left: -16px;
`;

export const StyledImg = styled.img`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
`;
