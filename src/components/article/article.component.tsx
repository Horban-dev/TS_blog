import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TagList } from '../tag-list/tag-list.component';
import { FavoriteButton } from '../favourite-button/favoutire-button.component';
import { FeedArticle } from '../../api/global-feed';
import { DateTime } from 'luxon'

interface ArticleProps extends FeedArticle { }

export const Article: FC<ArticleProps> = ({ author, title, description, favoritesCount, createdAt, tagList }) => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex justify-between ">
                    <div className="flex">
                        <Link to={`/@${author.username}`}>
                            <img
                                src={author.image}
                                alt="nokwin avatar"
                                className="inline-block h-8 w-8 rounded-full"
                            />
                        </Link>
                        <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
                            <Link to={`/@${author.username}`} className="font-medium">
                                {author.username}
                            </Link>
                            <span className="text-mainColor-mainBlack text-date">
                                {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_MED)}
                            </span>
                        </div>
                    </div>
                    <FavoriteButton count={favoritesCount} />
                </div>
                <Link to="/article/qwert" className="hover:no-underline">
                    <h1 className="mb-1 font-semibold text-2xl text-mainColor-mainBlack">
                        {title}
                    </h1>
                    <p className="text-mainColor-mainBlack font-light mb-1">
                        {description}
                    </p>
                    <div className="flex justify-between">
                        <span className="text-mainColor-mainBlack text-date font-light">
                            Read more...
                        </span>
                        <TagList list={tagList} />
                    </div>
                </Link>
            </div>
        </article>
    );
};