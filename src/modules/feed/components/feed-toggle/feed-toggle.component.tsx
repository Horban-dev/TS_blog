import { FC } from 'react';
import clsx from 'clsx';
import { NavLink, useSearchParams } from 'react-router-dom';

interface FeedToggleItem {
    text: string;
    link: string;
}

interface FeedToggleProps {
    defaultText?: string;
    defaultLink?: string;
    items?: FeedToggleItem[];
}

export const FeedToggle: FC<FeedToggleProps> = ({
    defaultText = 'Global Feed',
    defaultLink = '/',
    items = [],
}) => {

    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    const globalFeedClasses = ({ isActive }: { isActive: boolean }) => {
        return clsx('bg-white border-mainColor-blue py-2 px-4 hover:no-underline', {
            'text-black/30 hover:text-black/60': tag || !isActive,
            'border-b-2': !tag && isActive,
        });
    };
    return (
        <div className="h-8">
            <ul className="flex">
                <li>
                    <NavLink to={defaultLink} className={globalFeedClasses} end>
                        {defaultText}
                    </NavLink>
                    {items.map((item) => (
                        <NavLink
                            to={item.link}
                            className={globalFeedClasses}
                            key={item.link}
                        >
                            {item.text}
                        </NavLink>
                    ))}
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