import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TagList } from '../tag-list/tag-list.component';
import { FavoriteButton } from '../favourite-button/favoutire-button.component';

interface ArticleProps { }

export const Article: FC<ArticleProps> = () => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex">
                    <Link to="/@nokwin">
                        <img
                            src="https://cdn.imgbin.com/6/11/6/imgbin-avatar-user-profile-male-logo-profile-icon-hPsxpFsdzMBQwFaQ2jp2u117a.jpg"
                            alt="nokwin avatar"
                            className="inline-block h-8 w-8 rounded-full"
                        />
                    </Link>
                    <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
                        <Link to="/@nokwin" className="font-medium">
                            Illia Horban
                        </Link>
                        <span className="text-mainColor-gray text-date">18 fabuary, 2023</span>
                    </div>
                    <FavoriteButton />
                </div>
                <Link to="/article/qwert" className="hover:no-underline">
                    <h1 className="mb-1 font-semibold text-2xl text-mainColor-darkestGray">
                        Some title
                    </h1>
                    <p className="text-mainColor-darkenGray font-light mb-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad.
                    </p>
                    <div className="flex justify-between">
                        <span className="text-mainColor-gray text-date font-light">
                            Read more...
                        </span>
                        <TagList />
                    </div>
                </Link>
            </div>
        </article>
    );
};