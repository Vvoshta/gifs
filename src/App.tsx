import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Buttons } from './components';
import { Stack } from '@mui/material';
import { SearchPage, TrendsPage } from './pages';

function App() {
    return (
        <div className="main-content">
            <Stack direction="row" spacing={2}>
                <Buttons />
            </Stack>
            <Routes>
                <Route path="/" element={<TrendsPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;
