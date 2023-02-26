import { FC } from 'react';
import clsx from 'clsx';
import { NavLink, useSearchParams } from 'react-router-dom';

interface FeedToggleProps { }

export const FeedToggle: FC<FeedToggleProps> = () => {

    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    const globalFeedClasses = clsx(
        'border-mainColor-blue py-2 px-4 hover:text-black/60 hover:no-underline',
        {
            'text-black/30': tag,
            'border-b-2': !tag,
        }
    );
    return (
        <div className="h-8">
            <ul className="flex">
                <li>
                    <NavLink to="/" className={globalFeedClasses}>
                        Global Feed
                    </NavLink>
                    {tag && (
                        <span className="border-b-2 border-mainColor-blue py-2 px-4 text-mainColor-blue">
                            # {tag}
                        </span>
                    )}
                </li>
            </ul>
        </div>
    );
};