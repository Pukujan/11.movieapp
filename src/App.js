import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieByCategory from './pages/MovieByCategory'
import Detail from './components/Detail'
import PageQuery from './pages/PageQuery'
import Footer from './components/Footer'

const App = () => {



  return (
    <div>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:category' element={<MovieByCategory />} />
        <Route path='movie/search/:search' element={<Search />} />
        <Route path='movie/page/:page' element={<PageQuery />} />
        <Route path='movie/detail/:id' element={<Detail />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App