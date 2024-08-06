import { SxProps } from '@mui/material';
import { blue, grey, cyan } from '@mui/material/colors';

export const StyledButton: SxProps = {
    minWidth: '64px',
    padding: '6px 16px',
    letterSpacing: '0',
    zIndex: '1',
    backgroundColor: blue[500],
    color: 'white',
    fontWeight: 'bold',
    border: '1px solid transparent',
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

export const SettingsStyledButton: SxProps = {
    ...StyledButton,
    backgroundColor: grey[300],
    color: blue[500],
    '&:hover, &:focus': {
        backgroundColor: cyan[300]
    },
    '&:active': {
        backgroundColor: blue[500]
    }
};
