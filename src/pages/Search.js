import React from 'react'
import { useGetSearchedMovieQuery } from '../features/movieApi'
import { useParams } from 'react-router-dom';
import DataShow from '../components/DataShow';

const Search = () => {

  const { search } = useParams();
  const { isLoading, data, isError, Error } = useGetSearchedMovieQuery(search);


  return (
    <div>
      <h1 className='text-center text-2xl my-20'>Here are results for <p className='font-bold uppercase text-5xl text-red-600'>{search} </p></h1>
      <DataShow data={data} isLoading={isLoading} isError={isError} error={Error} />
    </div>
  )
}

export default Search