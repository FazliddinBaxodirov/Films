import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { UseAxios } from '../hooks/UseAxios'
import { KEY, REQUEST, TOKEN } from '../hooks/UseEnv'
import MovieCard from '../components/MovieCard'
import { Pagination } from '@mui/material'

export default function TopRated() {
  const [page,setPage] = useState(1)
  const [totalPage,setTotalPage] = useState(0)
  const [movieData,setMovieData] = useState([])
  useEffect(() => {
    UseAxios().get(`/movie/top_rated?language=en-US&page=${page}?api_key=${KEY}`,{
      headers:{
        "Authorization":`Bearer ${TOKEN}`
      }
    })
    .then(res => {
      setMovieData(res.data.results);
      setTotalPage(res.data.total_pages)
    })
  },[page])

  function handleChangePage(a,b){
    setPage(b)
    }
  return (
    <div className='w-[90%] bg-[#000c17] overflow-y-auto h-screen'>
      <Header title={'Top Rated'}/>
      <div className='px-[40px] py-[30px] justify-center gap-[70px] flex flex-wrap '>
        {movieData.map((item,index) => (<MovieCard item={item} key={index}/>))}
        <div className='w-full text-center px-[370px]'><Pagination onChange={handleChangePage} className='bg-white rounded-md' count={totalPage} showFirstButton showLastButton />;</div>
      </div>
    </div>
  )
}
