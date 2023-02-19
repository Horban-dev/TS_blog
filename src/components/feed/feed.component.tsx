import { FC } from 'react';
import { useGetGlobalFeedQuery } from '../../api/apis';
import { ArticleList } from '../article-list/article-list.component';
import { Container } from '../container/container.component';
import { FeedToggle } from '../feed-toggle/feed-toggle.component';


interface FeedProps { }

export const Feed: FC<FeedProps> = () => {
    const { data, error, isLoading } = useGetGlobalFeedQuery('')
    if (error) {
        return <Container>Something went wrong...</Container>
    }
    if (isLoading) {
        return <Container>Feeds loading...</Container>
    }
    return (
        <Container>
            <FeedToggle />
            <div className="flex">
                <ArticleList list={data?.articles || []} />
                <div className="w-1/4">(future tags)</div>
            </div>
        </Container>
    );
};