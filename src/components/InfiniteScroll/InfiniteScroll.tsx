import React, { useRef, useEffect } from 'react';

const InfiniteScroll: React.FC<{
    children: React.ReactNode;
    isPageLoading: boolean;
    hasMore: boolean;
    loadMore: () => void;
    threshold: number;
}> = ({ children, hasMore, loadMore, threshold }) => {
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && hasMore) {
                        loadMore();
                    }
                });
            },
            { rootMargin: '20px', threshold }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [loadMore]);

    return (
        <div>
            {children}
            <div ref={sentinelRef}></div>
        </div>
    );
};

export default InfiniteScroll;
