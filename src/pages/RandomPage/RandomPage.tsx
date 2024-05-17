import React from 'react';
import { useGetRandomGifQuery } from '../../store/api';
import { Button, Stack } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { StyledStack, StyledButton, StyledImg } from './style';

const RandomPage: React.FC = () => {
    const { data: randomGif, error, isLoading } = useGetRandomGifQuery();

    if (isLoading && !randomGif) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div>
            <Stack spacing={2} sx={StyledStack}>
                <Button sx={StyledButton}>
                    Update&nbsp;
                    <CachedIcon />
                </Button>
                <img
                    src={randomGif?.images.downsized.url}
                    alt=""
                    style={StyledImg}
                />
            </Stack>
        </div>
    );
};

export default RandomPage;
