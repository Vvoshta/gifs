import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GIPHY_KEY } from '../../consts/main';
import { IGif } from '../../types';

export const giphyApi = createApi({
    reducerPath: 'giphyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs' }),
    endpoints: (build) => ({
        getTrendingGifs: build.query<IGif[], { limit: number; offset: number }>(
            {
                query: ({ limit, offset }) => ({
                    url: `/trending?api_key=${GIPHY_KEY}&limit=${limit}&offset=${offset}`,
                    params: {
                        _limit: limit,
                        _start: offset
                    }
                }),
                transformResponse: (response: { data: IGif[] }) =>
                    response.data,
                merge: (existingData = [], newData) => [
                    ...existingData,
                    ...newData
                ],
                serializeQueryArgs: ({ endpointName }) => {
                    return endpointName;
                }
            }
        ),
        getSearchedGifs: build.query<
            IGif[],
            { searchStr: string; limit: number; offset: number }
        >({
            query: ({ searchStr, limit, offset }) => ({
                url: `/search?api_key=${GIPHY_KEY}&q=${searchStr}&limit=${limit}&offset=${offset}`,
                params: {
                    q: searchStr,
                    _limit: limit,
                    _start: offset
                }
            }),
            transformResponse: (response: { data: IGif[] }) => response.data,
            merge: (existingData, newData, { arg: { offset } }) => {
                if (offset === 0) {
                    return newData;
                }
                return [...existingData, ...newData];
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            }
        }),
        getRandomGif: build.query<IGif, void>({
            query: () => `/random?api_key=${GIPHY_KEY}`,
            transformResponse: (response: { data: IGif }) => response.data,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            }
        })
    })
});

export const {
    useGetTrendingGifsQuery,
    useGetSearchedGifsQuery,
    useGetRandomGifQuery,
    useLazyGetRandomGifQuery
} = giphyApi;
