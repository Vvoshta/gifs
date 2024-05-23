import React from 'react';
import { Stack, Button } from '@mui/material';
import { StyledButton, StyledStack } from './style';

const SettingsPage: React.FC = () => {
    return (
        <Stack sx={StyledStack}>
            <Button sx={StyledButton}>Slides</Button>
            <Button sx={StyledButton}>Bubbles</Button>
            <Button sx={StyledButton}>Figures</Button>
        </Stack>
    );
};

export default SettingsPage;
