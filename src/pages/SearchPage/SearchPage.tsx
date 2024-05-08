// todo нужно сделать так, чтобы при 2ом и дальше вводе в строку обновлялись гифки

import React, { ChangeEvent, useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { StyledTextField } from './style';
import { useGetSearchedGifsQuery } from '../../store/api';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import { GifItem } from '../../components';
import { useDebounce } from '../../hooks';

const SearchPage: React.FC = () => {
    const [searchStr, setSearchStr] = useState('');
    const limit = 9;
    const [offset, setOffset] = useState(9);

    const debouncedSearch = useDebounce(searchStr, 500);

    const {
        data: searchedGifs = [],
        error,
        isLoading
    } = useGetSearchedGifsQuery(
        { searchStr: debouncedSearch, limit, offset },
        {
            refetchOnMountOrArgChange: true
        }
    );

    const loadMore = () => {
        setOffset(offset + limit);
    };

    useEffect(() => {
        setOffset(0);
    }, [debouncedSearch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchStr(value);
    };

    if (isLoading && !searchedGifs) return <div>Loading...</div>;
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
