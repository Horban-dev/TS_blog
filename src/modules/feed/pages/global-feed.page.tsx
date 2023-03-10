import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetGlobalFeedQuery } from '../../../api/apis';
import { Banner } from '../components/banner/banner.component';
import { Container } from '../components/container/container.component';
import { FeedToggle } from '../components/feed-toggle/feed-toggle.component';
import { Feed } from '../components/feed/feed.component';
import { TagCloud } from '../components/tag-cloud/tag-cloud.component';
import { usePageParam } from '../hooks/use-page-param.hook';


interface GlobalFeedPageProps { }

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePageParam();

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  return (
    <>
      <Banner />
      <Container>
        <FeedToggle />
        <div className="flex">
          <div className="w-3/4">
            <Feed
              data={data}
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
            />
          </div>
          <div className="w-1/4 pl-3">
            <TagCloud />
          </div>
        </div>
      </Container>
    </>
  );
};