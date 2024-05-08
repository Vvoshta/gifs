import React from 'react';
import { Box, Grid } from '@mui/material';
import { StyledBoxItem, StyledImg } from './style';
import { IGif } from '../../types';

interface GifItemProps {
    gif: IGif;
}

const GifItem: React.FC<GifItemProps> = ({ gif }) => {
    return (
        <Grid item xs={4} key={gif.id}>
            <Box sx={StyledBoxItem}>
                <img
                    style={StyledImg}
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                />
            </Box>
        </Grid>
    );
};

export default GifItem;
