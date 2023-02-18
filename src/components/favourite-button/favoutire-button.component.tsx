
import { FC } from 'react';

interface FavoriteButtonProps { }

export const FavoriteButton: FC<FavoriteButtonProps> = () => {
    return (
        <button className="text-mainColor-blue border-mainColor-blue text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm hover:text-white hover:bg-mainColor-blue focus:text-white focus:bg-mainColor-darkBlue">
            <i className="ion-heart"></i>
            <span className="ml-1 font-normal">70</span>
        </button>
    );
};