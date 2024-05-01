import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GIPHY_KEY } from '../../consts/main';
import { IGif } from '../../types/gif';

export const giphyApi = createApi({
    reducerPath: 'giphyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs' }),
    endpoints: (build) => ({
        getTrendingGifs: build.query<IGif[], { limit: number; start: number }>({
            query: ({ limit = 9, start = 0 }) => ({
                url: `/trending?api_key=${GIPHY_KEY}&limit=${limit}&offset=${start}`,
                params: {
                    _limit: limit,
                    _start: start
                }
            }),
            transformResponse: (response: { data: IGif[] }) => response.data
        })
    })
});

export const { useGetTrendingGifsQuery } = giphyApi;
