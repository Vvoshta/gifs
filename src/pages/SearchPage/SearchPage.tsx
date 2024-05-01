import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { StyledTextField } from './style';
import { IGif } from '../../types/gif';
import { useGetSearchedGifsQuery } from '../../store/api/gif';

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchString(value);
    };

    return (
        <div>
            <TextField
                sx={StyledTextField}
                value={searchString}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchPage;
