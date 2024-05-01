import React, { useEffect, useState } from 'react';
import { useGetTrendingGifsQuery } from '../../store/api/gif';
import { StyledBox } from './style';
import { Box, Grid } from '@mui/material';
import { IGif } from '../../types/gif';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';

const TrendsPage: React.FC = () => {
    const [currentPostStart, setCurrentPostStart] = useState(0);
    const [trendingGifs, setTrendingGifs] = useState<IGif[]>([]);

    const {
        data: newTrendingGifs,
        error,
        isLoading
    } = useGetTrendingGifsQuery({
        limit: 9,
        start: currentPostStart
    });

    useEffect(() => {
        if (newTrendingGifs) {
            setTrendingGifs((prevTrendingGifs: IGif[]) => [
                ...prevTrendingGifs,
                ...newTrendingGifs
            ]);
        }
    }, [newTrendingGifs]);

    const loadMore = () => {
        setCurrentPostStart((prev) => prev + 9);
    };

    if (isLoading) return <div>Loading...</div>;
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
                    </Grid>
                </InfiniteScroll>
            </Grid>
        </Box>
    );
};

export default TrendsPage;
