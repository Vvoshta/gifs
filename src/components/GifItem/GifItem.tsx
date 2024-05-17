import React from 'react';
import { Box, Grid } from '@mui/material';
import { StyledBoxItem, StyledImg } from './style';
import { IGif } from '../../types';

interface GifItemProps {
    gifs: IGif[];
}

const GifItem: React.FC<GifItemProps> = ({ gifs }) => {
    return (
        <Grid container spacing={2}>
            {gifs.map((gif: IGif) => (
                <Grid item xs={4} key={gif.id}>
                    <Box sx={StyledBoxItem}>
                        <img
                            style={StyledImg}
                            src={gif.images.downsized.url}
                            alt={gif.title}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default GifItem;
