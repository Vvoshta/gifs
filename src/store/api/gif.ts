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
                serializeQueryArgs: ({
                    // queryArgs,
                    // endpointDefinition,
                    endpointName
                }) => {
                    return endpointName;
                }
            }
        ),
        getSearchedGifs: build.query<
            IGif[],
            { searchString: string; limit: number; start: number }
        >({
            query: ({ searchString, limit = 0, start = 0 }) => ({
                url: `/search?api_key=${GIPHY_KEY}&q=${searchString}&limit=${limit}&offset=${start}`,
                params: {
                    q: searchString,
                    _limit: limit,
                    _start: start
                }
            }),
            transformResponse: (response: { data: any }, meta, arg) =>
                response.data
        })
    })
});

export const { useGetTrendingGifsQuery } = giphyApi;
