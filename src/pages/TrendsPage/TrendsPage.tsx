import React, { useCallback, useState, useEffect } from 'react';
import { useGetTrendingGifsQuery } from '../../store/api';
import { StyledBox } from './style';
import { Box, CircularProgress, Grid } from '@mui/material';
import { GifItem, InfiniteScroll } from '../../components';

const TrendsPage: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const limit = 9;

    const {
        data: trendingGifs = [],
        isLoading,
        error,
        refetch
    } = useGetTrendingGifsQuery(
        { limit, offset },
        {
            refetchOnMountOrArgChange: true
        }
    );

    useEffect(() => {
        console.log('Trending Gifs:', trendingGifs);
        console.log('Is Loading:', isLoading);
        console.log('Error:', error);
        if (offset === 0) {
            refetch();
        }
    }, [offset, refetch]);

    const loadMore = useCallback(() => {
        setOffset((prev) => prev + limit);
    }, []);

    if (isLoading && !trendingGifs) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <Box sx={StyledBox}>
            <Grid container spacing={2}>
                {isLoading && offset > 0 && <CircularProgress />}
                {!isLoading && (
                    <InfiniteScroll onLoadMore={loadMore}>
                        <GifItem gifs={trendingGifs} />
                    </InfiniteScroll>
                )}
            </Grid>
        </Box>
    );
};

export default TrendsPage;
