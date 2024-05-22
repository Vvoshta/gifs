import React, { useCallback, useEffect } from 'react';
import { useLazyGetRandomGifQuery } from '../../store/api';
import { Button, Stack, CircularProgress } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { StyledStack, StyledButton, StyledImg } from './style';

const RandomPage: React.FC = () => {
    const [trigger, { data: randomGif, error, isFetching }] =
        useLazyGetRandomGifQuery();

    const handleChange = useCallback(() => {
        trigger();
    }, [trigger]);

    useEffect(() => {
        trigger();
    }, []);

    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div>
            <Stack spacing={2} sx={StyledStack}>
                <Button sx={StyledButton} onClick={handleChange}>
                    Update&nbsp;
                    <CachedIcon />
                </Button>
                {isFetching ? (
                    <CircularProgress />
                ) : randomGif ? (
                    <img
                        src={randomGif.images.downsized.url}
                        alt="Random Gif"
                        style={StyledImg}
                    />
                ) : null}
            </Stack>
        </div>
    );
};

export default RandomPage;
