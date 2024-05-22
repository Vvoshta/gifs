import React, { useEffect } from 'react';

interface Props {
    onLoadMore: () => void;
    children?: React.ReactNode;
}

const InfiniteScroll: React.FC<Props> = ({ onLoadMore, children }) => {
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 50) {
                onLoadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onLoadMore]);

    return <>{children}</>;
};

export default InfiniteScroll;
