import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { StyledTextField } from './style';
import { IGif } from '../../types/gif';
import { useGetSearchedGifsQuery } from '../../store/api/gif';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';

const SearchPage: React.FC = () => {
    const [searchString, setSearchString] = useState('');
    const [currentPostStart, setCurrentPostStart] = useState(0);
    const [trendingGifs, setTrendingGifs] = useState<IGif[]>([]);

    const {
        data: newSearchedGifs,
        error,
        isLoading
    } = useGetSearchedGifsQuery({
        searchString,
        limit: 9,
        start: currentPostStart
    });

    useEffect(() => {
        if (newSearchedGifs) {
            setTrendingGifs((prevTrendingGifs: IGif[]) => [
                ...prevTrendingGifs,
                ...newSearchedGifs
            ]);
        }
    }, [newSearchedGifs]);

    const loadMore = () => {
        setCurrentPostStart((prev) => prev + 9);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchString(value);
    };

    return (
        <div>
            <InfiniteScroll onLoadMore={loadMore}>
                <TextField
                    sx={StyledTextField}
                    value={searchString}
                    onChange={handleChange}
                />
            </InfiniteScroll>
        </div>
    );
};

export default SearchPage;
