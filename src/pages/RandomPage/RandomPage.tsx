import React, { useCallback, useState, useEffect } from 'react';
import { useGetRandomGifQuery } from '../../store/api';
import { Button, Stack, CircularProgress } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { StyledStack, StyledButton, StyledImg } from './style';

const RandomPage: React.FC = () => {
    const [key, setKey] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { data: randomGif, error } = useGetRandomGifQuery(key, {
        refetchOnMountOrArgChange: true
    });

    const handleChange = useCallback(() => {
        setIsLoading(false);
        setKey((prevKey) => prevKey + 1);
    }, []);

    useEffect(() => {
        if (randomGif) {
            setIsLoading(true);
        }
    }, [randomGif]);

    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div>
            <Stack spacing={2} sx={StyledStack}>
                <Button sx={StyledButton} onClick={handleChange}>
                    Update&nbsp;
                    <CachedIcon />
                </Button>
                {!isLoading && <CircularProgress />}
                {isLoading && (
                    <img
                        src={randomGif?.images.downsized.url}
                        alt=""
                        style={StyledImg}
                    />
                )}
            </Stack>
        </div>
    );
};

export default RandomPage;
