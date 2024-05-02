import React from 'react';
import './App.scss';
import { Buttons } from './components/Buttons/Buttons';
import { Stack, Button } from '@mui/material';
import { TrendsPage } from './pages';

function App() {
    return (
        <div className="main-content">
            <Stack>
                <Buttons />
            </Stack>
            <Stack>
                <TrendsPage />
            </Stack>
        </div>
    );
}

export default App;
