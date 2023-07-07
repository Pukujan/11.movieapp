import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = '724bdf9baad1dd675009465bab4c03d7';


export const movieApi = createApi(
  {
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({

      getTrendingMovie: builder.query({
        query: (q) => ({
          url: '/trending/all/day',
          params: {
            api_key: apiKey,
          },
        })
      }),

      getMovieByCategory: builder.query({
        query: (q) => ({
          url: q,
          params: {
            api_key: apiKey,
          },
        })
      }),

      getSearchedMovie: builder.query({
        query: (searchedText) => ({
          url: '/search/movie',
          params: {
            api_key: apiKey,
            query: searchedText
          },
        })
      }),

      getMovieByPage: builder.query({
        query: (query) => ({
          url: `/movie/${query.category}`,
          params: {
            api_key: apiKey,
            page: query.page
          },
        })
      }),

      getMovieTrailer: builder.query({
        query: (movieId) => ({
          url: `/movie/${movieId}/videos`,
          params: {
            api_key: apiKey,
          },
        })
      }),




    }),
  });

// mutation methods: get or post etc are added later 

// tokens are addded in headers below params 
// signup and login are added in body  below params


export const { useGetMovieByCategoryQuery, useGetSearchedMovieQuery, useGetTrendingMovieQuery, useGetMovieByPageQuery, useGetMovieTrailerQuery } = movieApi