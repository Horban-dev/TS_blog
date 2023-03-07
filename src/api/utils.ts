import { GlbalFeed } from "./global-feed";

export const transformResponse = (response: GlbalFeed) => {
    return {
        articles: response.articles || [],
        articlesCount: response.articlesCount || 0,
    };
};