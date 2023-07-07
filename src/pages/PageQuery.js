import React from 'react'
import { useLocation } from 'react-router-dom'
import { useGetMovieByPageQuery } from '../features/movieApi';
import DataShow from '../components/DataShow';

const PageQuery = () => {

  const { state } = useLocation();

  const { data, isLoading, isError, error } = useGetMovieByPageQuery({
    category: state.category,
    page: state.page
  });


  return (
    <div>
      <DataShow
        data={data}
        isLoading={isLoading}
        isPage={true}
        category={state.category}
      />
    </div>


  )
}



export default PageQuery