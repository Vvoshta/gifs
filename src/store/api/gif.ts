import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GIPHY_KEY } from '../../consts/main';

export const giphyApi = createApi({
    reducerPath: 'giphyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs' }),
    endpoints: (builder) => ({
        getTrendingGifs: builder.query({
            query: () => `/trending?api_key=${GIPHY_KEY}&limit=9`
        })
    })
});

export const { useGetTrendingGifsQuery } = giphyApi;
