import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { StyledButton, SettingsStyledButton } from './style';

const Buttons: React.FC = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Link to="/">
                <Button sx={StyledButton}>Trends</Button>
            </Link>
            <Link to="/search">
                <Button sx={StyledButton}>Search</Button>
            </Link>
            <Link to="/random">
                <Button sx={StyledButton}>Random</Button>
            </Link>
            <Link to="/settings">
                <Button sx={SettingsStyledButton}>Settings</Button>
            </Link>
        </Stack>
    );
};

export default Buttons;
