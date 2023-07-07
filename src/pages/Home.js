import React from 'react'
import { useGetTrendingMovieQuery } from '../features/movieApi'
import DataShow from '../components/DataShow';

const Home = () => {

  const { isLoading, isError, error, data } = useGetTrendingMovieQuery();

  return (
    <div>
      <DataShow data={data} isLoading={isLoading} isError={isError} error={error} isPage={false} />



    </div>
  )
}

export default Home