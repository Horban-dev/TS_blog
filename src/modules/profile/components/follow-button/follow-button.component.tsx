import { FC } from 'react';

interface FollowButtonProps { }

export const FollowButton: FC<FollowButtonProps> = () => {
    return (
        <button className="text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm border-mainColor-mainBlack text-white  focus:bg-mainColor-darkBlue  active:bg-mainColor-mainBlack ">
            <i className="ion-plus-round" />
            &nbsp; Follow John Snow
        </button>
    );
};