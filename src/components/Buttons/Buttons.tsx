import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { StyledButton, SettingsStyledButton } from './style';

const Buttons: React.FC = () => {
    return (
        <>
            <Link to="/">
                <Button sx={StyledButton} href="">
                    Trends
                </Button>
            </Link>
            <Link to="/search">
                <Button sx={StyledButton} href="">
                    Search
                </Button>
            </Link>
            <Link to="/random">
                <Button sx={StyledButton} href="">
                    Random
                </Button>
            </Link>
            <Link to="/settings">
                <Button sx={SettingsStyledButton} href="">
                    Settings
                </Button>
            </Link>
        </>
    );
};

export default Buttons;
