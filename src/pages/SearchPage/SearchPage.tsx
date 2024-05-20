import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { TextField } from '@mui/material';
import { StyledTextField } from './style';
import { useGetSearchedGifsQuery } from '../../store/api';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import { GifItem } from '../../components';
import { useDebounce } from '../../hooks';

const SearchPage: React.FC = () => {
    const [searchStr, setSearchStr] = useState('');
    const [offset, setOffset] = useState(0);
    const limit = 9;

    const debouncedValue = useDebounce(searchStr, 500);

    const {
        data: searchedGifs = [],
        error,
        isLoading
    } = useGetSearchedGifsQuery(
        { searchStr: debouncedValue, limit, offset },
        { refetchOnMountOrArgChange: true, skip: !debouncedValue }
    );

    useEffect(() => {
        setOffset(0);
    }, [debouncedValue]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchStr(value);
    };

    const loadMore = useCallback(() => {
        setOffset((prev) => prev + limit);
    }, [limit]);

    if (isLoading && searchedGifs.length === 0) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div>
            <TextField
                sx={StyledTextField}
                value={searchStr}
                onChange={handleChange}
            />
            <InfiniteScroll onLoadMore={loadMore}>
                <GifItem gifs={searchedGifs} />
            </InfiniteScroll>
        </div>
    );
};

export default SearchPage;
