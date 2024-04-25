import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import {
    SettingsStyledButton,
    StyledButton
} from './components/Buttons/Buttons';
import { Stack } from '@mui/material';
import { TrendsPage } from './pages';

function App() {
    return (
        <div className="main-content">
            <Stack>
                <Link to="/">
                    <StyledButton href="">Trends</StyledButton>
                </Link>
                <Link to="/search">
                    <StyledButton href="">Search</StyledButton>
                </Link>
                <Link to="/random">
                    <StyledButton href="">Random</StyledButton>
                </Link>
                <Link to="/settings">
                    <SettingsStyledButton href="">
                        Settings
                    </SettingsStyledButton>
                </Link>
            </Stack>
            <Stack>
                <TrendsPage />
            </Stack>
        </div>
    );
}

export default App;
