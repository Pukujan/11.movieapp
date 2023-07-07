import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { useFormik } from 'formik';
import { HiSearch } from "react-icons/hi";

const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const [isScrolled, setIsScrolled] = React.useState(false);



  // formikj for search 
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/movie/search/${val.search}`);
      resetForm();
    }
  });



  const navs = [
    {
      name: 'Popular',
      path: '/movie/popular'
    },

    {
      name: 'Top Rated',
      path: '/movie/top_rated'
    },
    {
      name: 'Coming-soon',
      path: '/movie/upcoming'
    }
  ]

  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();


  return (
    <div>
      {/* LOGO with menu toggle on small screen and full on big screen*/}
      <div className='p-5 flex md:scale-100 scale-125  md:justify-between items-baseline gap-6 justify-center mx-10 '>
        <div>
          <NavLink to='/' className='text-4xl font-bold text-red-600 duration-300 hover:duration-300 hover:text-black'>Logo</NavLink>
        </div>

        <div>
          <button
            onClick={toggle}
            className='hover:scale-110 md:hidden duration-300'
          >
            {isOpen ? (
              <RxCross2 size={30} className='hover:bg-slate-400 my-1' />
            ) : (
              <IoMenu size={30} />
            )}
          </button>
        </div>
        <div className='md:flex hidden gap-10  text-xl justify-end'>
          {navs.map(nav => (
            <NavLink
              to={nav.path}
              key={nav.name}
              className={`hover:font-bold hover:text-red-600 duration-100 ${location.pathname === nav.path ? 'font-bold' : ''}`}
            >
              {nav.name}
            </NavLink>
          ))}
          {/* navbar using react router dom and map when size is above MD*/}



        </div>
      </div>


      {/* navbar toggled on on small screen  */}
      {isOpen && (
        <div className='flex flex-col space-y-5 m-5 md:hidden'>
          {navs.map(nav => (
            <NavLink
              to={nav.path}
              key={nav.name}
              className={`hover:scale-125  text-center hover:font-bold hover:text-red-600 ${location.pathname === nav.path ? 'font-bold' : ''}`}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* search bar  */}

      <div className='bg-[url(https://cdn.pixabay.com/photo/2016/03/23/17/33/curtain-1275200_1280.png)]
      
      md:bg-cover bg-no-repeat bg-opacity-25
      py-10 px-20'>
        <div className='sm:text-center'>
          <div className='py-2 text-white'>
            <h1 className='text-xl font-bold sm:py-0 py-6'>Search your <span className='capitalize text-3xl shadow-white drop-shadow-2xl'>favourite movies</span></h1>
            <p>Million of movie for your interest. <span className='font-bold '>Read, Rate & Share </span> </p>
          </div>

          <form
            className='flex justify-center items-center w-full'
            onSubmit={formik.handleSubmit}>
            <label htmlFor="search"></label>
            <div className='max-w-lg md:w-2/5 w-full flex'>
              <input
                type="text"
                name='search'
                value={formik.values.search}
                onChange={formik.handleChange}
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = 'Search your favourite movie'}
                placeholder='Search your favourite movie'
                className='w-full outline-none border rounded-l-lg text-center py-1 text-black'
              />
              <button
                type='submit'
                className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-lg'
              >
                <HiSearch size={30} className='text-white' />
              </button>
            </div>
          </form>
        </div>
      </div>




    </div >
  );
};

export default Header;
