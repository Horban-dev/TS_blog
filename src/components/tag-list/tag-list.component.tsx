import { FC } from 'react';

interface TagListProps { }

export const TagList: FC<TagListProps> = () => {
    return (
        <ul className="flex">
            <li className="font-light text-date border border-mainColor-lightenGray text-mainColor-tag mr-1 mb-0.2 px-tag rounded-tag">
                qwe
            </li>
            <li className="font-light text-date border border-mainColor-lightenGray text-mainColor-tag mr-1 mb-0.2 px-tag rounded-tag">
                qwe
            </li>
            <li className="font-light text-date border border-mainColor-lightenGray text-mainColor-tag mr-1 mb-0.2 px-tag rounded-tag">
                qwe
            </li>
            <li className="font-light text-date border border-mainColor-lightenGray text-mainColor-tag mr-1 mb-0.2 px-tag rounded-tag">
                qwe
            </li>
        </ul>
    );
};