import {Dialog} from './Modal'
import React, { useEffect, useState } from 'react'
import {  Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  AlbumDataFetch } from './Action/AlbumIndex'
import { Pagination } from './Pagination'

import { AllAlbumCard } from './AllAlbumCard'

export const AllAlbum = () => {

  const dispatch = useDispatch()
  let {post} = useSelector((state)=>state.FetchReducers)
  const selData =  useSelector((state) => state.FetchReducers.albumData)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = post.slice(firstPostIndex, lastPostIndex)
  const {isOpenModal} = useSelector((state)=>state.FetchReducers)

 
  useEffect(()=>{
    dispatch(AlbumDataFetch())
  },[])

 
  return (
    <Container>
      <Row lg={3} sm={1} md={2} >{
      currentPost.map((item, index) => {
            return (
             <AllAlbumCard key={index} item={item}/>
            )
          })
        }
      </Row>
      <Pagination  totalPosts={post.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      <Dialog isOpenModal={isOpenModal} selData={selData}/>
    </Container>
  )
}
