import React, { useState } from 'react';
import { useGetTrendingGifsQuery } from '../../store/api';
import { StyledBox } from './style';
import { Box, Grid } from '@mui/material';
import { IGif } from '../../types';
import { GifItem, InfiniteScroll } from '../../components';

const TrendsPage: React.FC = () => {
    const limit = 9;
    const [offset, setOffset] = useState(0);
    const {
        data: trendingGifs,
        error,
        isLoading,
        isFetching
    } = useGetTrendingGifsQuery({
        limit,
        offset
    });

    const loadMore = () => {
        setOffset(offset + limit);
    };

    if (isLoading && !trendingGifs) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <Box sx={StyledBox}>
            <Grid container spacing={2}>
                <InfiniteScroll onLoadMore={loadMore}>
                    <Grid container spacing={2}>
                        {trendingGifs &&
                            trendingGifs.map((gif: IGif) => (
                                <GifItem key={gif.id} gif={gif} />
                            ))}
                        {isFetching && <div>Loading more...</div>}
                    </Grid>
                </InfiniteScroll>
            </Grid>
        </Box>
    );
};

export default TrendsPage;
