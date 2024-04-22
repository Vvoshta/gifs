import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const giphyApi = createApi({
    reducerPath: 'giphyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs' }),
    endpoints: (builder) => ({
        getTrendingGifs: builder.query({
            query: () =>
                '/trending?api_key=wEkBqUdBDM1U3ebfspVZWq4KXnH1ElwO&limit=25'
        })
    })
});

export const { useGetTrendingGifsQuery } = giphyApi;
