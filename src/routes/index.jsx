import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NowPlaying, Popular, TopRated, UpComing } from '../Pages'

export default function CustomRoutes() {
  return (
   <Routes>
    <Route path='/' element={<NowPlaying/>} />
    <Route path='/popular' element={<Popular/>} />
    <Route path='/top-rated' element={<TopRated/>} />
    <Route path='/up-coming' element={<UpComing/>} />
   </Routes>
  )
}
