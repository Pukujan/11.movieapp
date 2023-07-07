import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DataShow = ({ data, isLoading, isPage, category }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  const nav = useNavigate();


  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_t9gkkhz4.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  const m = [];

  console.log(m.length);
  if (data?.results.length === 0) {
    return <h1 className='text-2xl mx-auto text-center mb-20 text-red-600'>Try another Keyword</h1>
  }


  console.log(data);

  return (
    <div>
      <div>
        <div className='p-6 grid gap-8 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2'>
          {data && data.results.map((n) => {
            return <div
              onClick={() => nav(`/movie/detail/${n.id}`, { state: n })}
              className='hover:scale-105 ease-in-out duration-200 cursor-pointer shadow-lg'
              key={n.id}>
              <img
                className='h-{375px} w-full object-cover'
                src={`https://image.tmdb.org/t/p/w500/${n.poster_path}`} alt="" />
              <div>
                <h1
                  className='px-5 text-2xl font-bold py-2'>
                  {n.title}
                </h1>
                <p className='px-5 pb-5'>
                  {n.overview.substring(0, 80) + '...'}
                </p>

              </div>

            </div>
          })
          }

        </div>


      </div>

      {isPage && <div className='flex text-center justify-center p-3 gap-10 mb-10'>
        <button
          onClick={() => {
            if (data.page > 1) {
              nav(-1);
            }

          }}>
          Prev</button>
        <p>{data.page}</p>
        <button
          onClick={() => {
            nav(`/movie/page/${data.page - 1}`, {
              state: {
                category,
                page: data.page + 1
              }
            });
          }}>
          Next</button>
      </div>
      }
    </div >
  )
}


export default DataShow