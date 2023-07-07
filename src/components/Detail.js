import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetMovieTrailerQuery } from '../features/movieApi';

import { BsPlayCircle } from 'react-icons/bs';

const Detail = () => {
  const { state } = useLocation();
  const { isError, error, data, isLoading } = useGetMovieTrailerQuery(state.id);

  const [showVideo, setShowVideo] = useState(false);

  let grade = '';
  let ratingClass = '';

  if (state.vote_average >= 9) {
    ratingClass = 'bg-red-500';
    grade = 'Book a ticket right now';
  } else if (state.vote_average >= 7) {
    ratingClass = 'bg-red-500';
    grade = 'Must Watch';
  } else if (state.vote_average >= 5) {
    ratingClass = 'bg-yellow-700';
    grade = 'Average';
  } else if (state.vote_average >= 3) {
    ratingClass = 'bg-yellow-500';
    grade = 'Below Average';
  } else {
    ratingClass = 'bg-red-500';
    grade = 'Please Avoid';
  }

  console.log(state);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <div className={`${showVideo ? 'flex flex-col items-center' : ''}`}>
        <div className={`flex lg:flex-row flex-col lg:pb-28 justify-center py-8 ${showVideo ? 'lg:flex-col' : 'flex-row items-center'} p-4 gap-4`}>
          <div>
            {showVideo ? (
              <iframe
                className='max-w-[1080px] w-full xl:h-[600px] lg:h-[600px] md:h-[400px] h-[500px] aspect-video'
                src={`https://www.youtube.com/embed/${data?.results[0].key}?autoplay=1`}
                title='Movie Trailer'
                allowFullScreen
              ></iframe>
            ) : (
              <button onClick={handleButtonClick}>
                <div className='relative'>
                  <img
                    className='max-h-[700px] w-full object-contain'
                    src={`https://image.tmdb.org/t/p/original/${state.poster_path}`}
                    alt=''
                  />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <BsPlayCircle className='text-white text-7xl' />
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className='text-xl max-w-md md:max-w-lg 2xl:max-w-2xl p-4'>
            <h1 className='text-4xl py-5 font-bold'>{state.title}</h1>
            <p>{state.overview}</p>
            <div className='grid grid-cols-2 '>
              <div className='py-3'>
                <p className='font-bold text-xl'>Entertainment : </p>
                <p className='font-bold text-xl'>Release Date: </p>
              </div>
              <div className='py-3'>
                <p className='capitalize'>{state.media_type}</p>
                {state.release_date}

              </div>
            </div>
            <div className='sm:flex gap-10 items-center'>
              <div className={`sm:inline-block my-4 p-3 text-white text-center ${ratingClass}`}>
                <p className='text-3xl font-bold'>{state.vote_average.toFixed(2)}</p>
                <p className='font-light'>{state.vote_count} votes</p>
              </div>
              <p className='flex items-center gap-2'>
                Grade: <span className='font-bold text-3xl'>{grade}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

