import React, { useEffect, useState } from 'react';
import { useGetTrendingGifsQuery } from '../../store/api/gif';
import { StyledBox } from './style';
import { Box, Grid } from '@mui/material';
import { IGif } from '../../types/gif';
import { StyledBoxItem, StyledImg } from '../../components/GifItem/style';

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

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 50) {
                setCurrentPostStart((prev) => prev + 9); // Загружаем следующие 9 элементов
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <Box sx={StyledBox}>
            <Grid container spacing={2}>
                {trendingGifs &&
                    trendingGifs.map((gif: IGif) => (
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

export default TrendsPage;
