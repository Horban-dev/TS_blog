import { FC } from 'react';
import { FeedArticle } from '../../api/global-feed';
import { Article } from '../article/article.component';

interface ArticleListProps {
    list: FeedArticle[];
}

export const ArticleList: FC<ArticleListProps> = ({ list }) => {
    return (
        <div className="w-4/4">
            {list.map(article => (
                <Article key={article.slug} {...article} />
            ))}
        </div>
    );
};