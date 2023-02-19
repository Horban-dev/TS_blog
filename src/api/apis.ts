import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios/axios-base-query'
import { GlbalFeed } from './global-feed';


export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api'
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlbalFeed, any>({
      query: () => ({
        url: '/articles',
        method: 'GET'
      })
    }),
  }),
})

export const { useGetGlobalFeedQuery } = feedApi;