import React, { useState, useEffect } from 'react';
import { useGetTrendingGifsQuery } from '../../store/api/gif';
import { IGif } from '../../types/gif';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import GifsBox from '../../components/GifsBox/GifsBox';

const TrendsPage: React.FC = () => {
    const [trendingGifs, setTrendingGifs] = useState<IGif[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: trendingGifsData,
        isLoading: isApiLoading,
        error
    } = useGetTrendingGifsQuery({ page: currentPage });

    useEffect(() => {
        if (isApiLoading || error) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [isApiLoading, error]);

    useEffect(() => {
        if (trendingGifsData?.data) {
            setTrendingGifs([...trendingGifs, ...trendingGifsData.data]);
            setHasMore(trendingGifsData.pagination.next !== null);
        }
    }, [trendingGifsData]);

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <InfiniteScroll
            isPageLoading={isLoading}
            hasMore={hasMore}
            loadMore={loadMore}
            threshold={0}
        >
            <GifsBox gifs={trendingGifs} />
        </InfiniteScroll>
    );
};

export default TrendsPage;
