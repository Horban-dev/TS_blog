import { FC } from 'react';

interface TagListProps {
    list: string[];
}

export const TagList: FC<TagListProps> = ({ list }) => {
    return (
        <ul className="flex">
            {list.map(tag => (
                <li key={tag} className="font-light text-date border border-mainColor-mainBlack text-mainColor-mainBlack mr-1 mb-0.2 px-mainBlack rounded-tag">
                    {tag}
                </li>
            ))}
        </ul>
    );
};