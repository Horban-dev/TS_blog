import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios/axios-base-query'
import { GlbalFeed } from './global-feed';

export const PAGE_COUNT = 10;
interface GlobalFeedParams {
  page: number;
}
export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api'
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlbalFeed, GlobalFeedParams>({
      query: ({ page }) => ({
        url: '/articles',
        method: 'GET',
        params: {
          limit: PAGE_COUNT,
          offset: page * PAGE_COUNT
        },
      })
    }),
  }),
})

export const { useGetGlobalFeedQuery } = feedApi;