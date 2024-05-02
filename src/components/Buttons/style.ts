// import React, { useState } from 'react';
import { SxProps } from '@mui/material';
import { Button } from '@mui/material';
import { blue, grey, cyan } from '@mui/material/colors';

export const StyledButton: SxProps = {
    minWidth: '64px',
    padding: '6px 16px',
    letterSpacing: '0',
    backgroundColor: blue[500],
    color: 'white',
    fontWeight: 'bold',
    boxShadow:
        'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
    '&:hover, &:focus': {
        backgroundColor: blue[800],
        border: '1px solid rgba(25, 118, 210, 0.5)'
    },
    '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: 'white'
    }
}));

export const SettingsStyledButton = styled(StyledButton)({
    backgroundColor: grey[300],
    color: blue[500],
    '&:hover, &:focus': {
        backgroundColor: cyan[300]
    },
    '&:active': {
        backgroundColor: blue[500]
    }
});
