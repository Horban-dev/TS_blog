import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetProfileFeedQuery } from '../../../../api/apis';
import { Container } from '../../../feed/components/container/container.component';
import { FeedToggle } from '../../../feed/components/feed-toggle/feed-toggle.component';
import { Feed } from '../../../feed/components/feed/feed.component';
import { usePageParam } from '../../../feed/hooks/use-page-param.hook';
import { ProfileBanner } from '../profile-banner/profile-banner.component';

interface ProfilePageProps { }

export const ProfilePage: FC<ProfilePageProps> = () => {
    const { page } = usePageParam();
    const { profile } = useParams();
    const { pathname } = useLocation();

    const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
        page,
        author: profile!,
        isFavorite: pathname.includes(
            `/@${encodeURIComponent(profile!)}/favorites`
        ),
    });

    const feedToggleItems = [
        {
            text: 'Favorited articles',
            link: `/@${encodeURIComponent(profile!)}/favorites`,
        },
    ];

    return (
        <>
            <ProfileBanner />
            <Container>
                <FeedToggle
                    defaultText="My Articles"
                    defaultLink={`/@${encodeURIComponent(profile!)}`}
                    items={feedToggleItems}
                />
                <Feed
                    data={data}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    error={error}
                />
            </Container>
        </>
    );
};