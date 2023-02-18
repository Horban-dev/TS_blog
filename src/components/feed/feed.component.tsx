import { FC } from 'react';
import { ArticleList } from '../article-list/article-list.component';
import { Container } from '../container/container.component';
import { FeedToggle } from '../feed-toggle/feed-toggle.component';


interface FeedProps { }

export const Feed: FC<FeedProps> = () => {
    return (
        <Container>
            <FeedToggle />
            <div className="flex">
                <ArticleList />
                <div className="w-1/4">(future tags)</div>
            </div>
        </Container>
    );
};