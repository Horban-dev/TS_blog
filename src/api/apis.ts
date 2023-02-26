import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios/axios-base-query'
import { GlbalFeed } from './global-feed';
import { PopularTagsIn } from './popular-tags';

export const PAGE_COUNT = 10;

interface GlobalFeedParams {
  page: number,
  tag: string | null
}
export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api'
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlbalFeed, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: '/articles',
        method: 'GET',
        params: {
          limit: PAGE_COUNT,
          offset: page * PAGE_COUNT,
          tag,
        },
      })
    }),
    getPopularTags: builder.query<PopularTagsIn, any>({
      query: () => ({
        url: '/tags',
        method: 'GET'
      }),
    }),
  }),
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;