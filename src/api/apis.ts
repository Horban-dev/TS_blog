import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios/axios-base-query'
import { FEED_PAGE_SIZE } from '../modules/feed/consts/consts';
import { FeedArticle } from './global-feed';
import { PopularTagsIn } from './popular-tags';
import { transformResponse } from './utils';


interface BaseFeedParams {
  page: number;
}
interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
}

interface ProfilePeedParams extends BaseFeedParams {
  author: string;
  isFavorite?: boolean;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api'
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: '/articles',
        method: 'GET',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse,
    }),
    getProfileFeed: builder.query<FeedData, ProfilePeedParams>({
      query: ({ page, author, isFavorite = false }) => ({
        url: '/articles',
        method: 'GET',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          author: isFavorite ? undefined : author,
          favorited: !isFavorite ? undefined : author,
        },
      }),
      transformResponse,
    }),
    getPopularTags: builder.query<PopularTagsIn, any>({
      query: () => ({
        url: '/tags',
        method: 'GET'
      }),
    }),
  }),
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery, useGetProfileFeedQuery } = feedApi;