import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import React from 'react';

const Buttons: React.FC = () => {
    return (
        <>
            <Link to="/">
                <Button sx={} href="">
                    Trends
                </Button>
            </Link>
            <Link to="/search">
                <Button href="">Search</Button>
            </Link>
            <Link to="/random">
                <Button href="">Random</Button>
            </Link>
            <Link to="/settings">
                <Button href="">Settings</Button>
            </Link>
        </>
    );
};

export default Buttons;
