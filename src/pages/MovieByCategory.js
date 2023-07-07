import React from 'react'
import { useGetMovieByCategoryQuery } from '../features/movieApi'
import { useParams } from 'react-router-dom';
import DataShow from '../components/DataShow';




const MovieByCategory = () => {

  const { category } = useParams();
  const { data, isLoading, isError, error } = useGetMovieByCategoryQuery(category ? `movie/${category}` : `movie/popular`);




  return (
    <div>
      <DataShow
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        isPage={true}
        category={category}
      />
    </div >
  )
}




export default MovieByCategory