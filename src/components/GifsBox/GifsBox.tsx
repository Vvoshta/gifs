import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { IGif } from '../../types/gif';
import { StyledBox, StyledBoxItem, StyledImg } from './style';

interface IGifsBoxProps {
    gifs: IGif[];
}

const GifsBox: FC<IGifsBoxProps> = ({ gifs }) => {
    return (
        <Box sx={StyledBox}>
            <Grid container spacing={2}>
                {gifs &&
                    gifs.map((gif: IGif) => (
                        <Grid item xs={4} key={gif.id}>
                            <Box sx={StyledBoxItem}>
                                <img
                                    style={StyledImg}
                                    src={gif.images.fixed_height.url} // Исправлено использование 'src' вместо 'style'
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
