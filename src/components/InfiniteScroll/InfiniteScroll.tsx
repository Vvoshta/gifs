import React, { useRef, useEffect } from 'react';

const InfiniteScroll: React.FC<{
    children: React.ReactNode;
    fetchMore: () => void;
    hasMore: boolean;
}> = ({ children, fetchMore, hasMore }) => {
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && hasMore) {
                        fetchMore();
                    }
                });
            },
            { rootMargin: '20px' }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [fetchMore]);

    return (
        <div>
            {children}
            <div ref={sentinelRef}></div>
        </div>
    );
};

export default InfiniteScroll;
