import React from 'react';
import { useGetTrendingGifsQuery } from '../../store/reducers/apiSlice';
import { Grid, Box } from '@mui/material';
import * as S from './style';

interface Gif {
    id: string;
    images: {
        fixed_height: {
            url: string;
        };
    };
    title: string;
}

const TrendsPage: React.FC = () => {
    const { data, isLoading, error } = useGetTrendingGifsQuery({});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div>
            <Box sx={{ marginTop: '40px' }}>
                <S.StyledGrid container spacing={2}>
                    {data &&
                        data.data.map((gif: Gif) => (
                            <Grid
                                item
                                xs={4}
                                key={gif.id}
                                sx={{ width: '200px' }}
                            >
                                <Box sx={{ height: '250px' }}>
                                    <S.StyledImg
                                        src={gif.images.fixed_height.url}
                                        alt={gif.title}
                                    />
                                </Box>
                            </Grid>
                        ))}
                </S.StyledGrid>
            </Box>
        </div>
    );
};

export default TrendsPage;
