import React from 'react';
import { useGetTrendingGifsQuery } from '../../store/api/gif';
import { Box, Grid } from '@mui/material';
import { IGif } from '../../types/gif';
import { StyledBox, StyledBoxItem, StyledImg } from './style';

const GifsBox: React.FC = () => {
    const { data: trendingGifs } = useGetTrendingGifsQuery({});

    return (
        <Box sx={StyledBox}>
            <Grid container spacing={2}>
                {trendingGifs &&
                    trendingGifs.data.map((gif: IGif) => (
                        <Grid item xs={4} key={gif.id}>
                            <Box sx={StyledBoxItem}>
                                <img
                                    style={StyledImg}
                                    src={gif.images.fixed_height.url}
                                    alt={gif.title}
                                />
                            </Box>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

export default GifsBox;
