import React from 'react';
import { useGetTrendingGifsQuery } from '../../store/api/gif';
import GifsBox from '../../components/GifsBox/GifsBox';

const TrendsPage: React.FC = () => {
    const { isLoading, error } = useGetTrendingGifsQuery({});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    return <GifsBox />;
};

export default TrendsPage;
