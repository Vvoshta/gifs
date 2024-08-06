import { SxProps } from '@mui/material';
import React from 'react';
import { blue } from '@mui/material/colors';

export const StyledStack: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px'
};

export const StyledButton: SxProps = {
    minWidth: '64px',
    padding: '8px 22px',
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
        boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
        backgroundColor: 'white'
    }
};

export const StyledImg: React.CSSProperties = {
    borderRadius: '8px',
    marginTop: '40px',
    marginBottom: '40px',
    maxHeight: '600px',
    maxWidth: '600px'
};
