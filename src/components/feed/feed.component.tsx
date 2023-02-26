import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PAGE_COUNT, useGetGlobalFeedQuery } from '../../api/apis';
import { ArticleList } from '../article-list/article-list.component';
import { Container } from '../container/container.component';
import { FeedToggle } from '../feed-toggle/feed-toggle.component';
import ReactPaginate from 'react-paginate';
import { serializeSearchParams } from '../../utils/router';
import { TagCloud } from '../tag-cloud/tag-cloud.component';

interface FeedProps { }

export const Feed: FC<FeedProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(
        searchParams.get('page') ? Number(searchParams.get('page')) : 0
    );
    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected);
        setSearchParams(serializeSearchParams({ page: String(selected) }));
    };

    const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag'),
    });
    if (error) {
        return <Container>Something went wrong...</Container>
    }
    if (isLoading || isFetching) {
        return <Container>Feeds loading...</Container>
    }
    return (
        <Container>
            <FeedToggle />
            <div className="flex">
                <div className="w-3/4">
                    <ArticleList list={data?.articles || []} />
                    <nav className="my-6">
                        <ReactPaginate
                            pageCount={(data?.articlesCount || 0) / PAGE_COUNT}
                            pageRangeDisplayed={(data?.articlesCount || 0) / PAGE_COUNT}
                            previousLabel={null}
                            nextLabel={null}
                            containerClassName="flex"
                            pageClassName="group"
                            pageLinkClassName="p-3 text-mainColor-blut bg-white border border-mainColor-darkBlue -ml-px"
                            activeClassName="active group"
                            activeLinkClassName="group-[.active]:bg-mainColor-blue group-[.active]:text-white group-[.active]:border-mainColor-blue"
                            onPageChange={handlePageChange}
                            forcePage={page}
                        />
                    </nav>
                </div>
                <div className="w-1/4 pl-3">
                    <TagCloud />
                </div>
            </div>
        </Container>
    );
};