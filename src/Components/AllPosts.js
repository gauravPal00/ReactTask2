
import React, { useEffect, useState } from 'react'
import {  Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Pagination } from './Pagination'
import { Dialog } from './Modal'
import { AllCard } from './AllCard'
import { postDataFetch, PostUserDataFetch } from './Action/PostIndex'
import { FetchUser } from './Action/UserIndex'

export const AllPosts = () => {
  const dispatch = useDispatch()
  
  const { post } = useSelector((state) => state.FetchReducers)
  const { user } = useSelector((state) => state.FetchReducers)
  const { userData } = useSelector((state) => state.FetchReducers)
  const { isOpenModal } = useSelector((state) => state.FetchReducers)
  const { selData } = useSelector((state) => state.FetchReducers)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = post.slice(firstPostIndex, lastPostIndex)

  const style = {
    margin: "10px 0"
  }


  useEffect(() => {
    dispatch(postDataFetch())
    dispatch(FetchUser())
  }, [])

  

 
  return (
    <Container>
      <h3>All Post</h3>
      <center>
        <select style={style} onChange={(e) => dispatch(PostUserDataFetch(e.target.value))}>
          <option>Choose username</option>
          {
            user.map((item, index) => {
              return (
                <React.Fragment key={index} >
                  <option value={item.id}>{item.username}</option>
                </React.Fragment>
              )
            })
          }
        </select>
      </center>


      <Row lg={3} sm={1} md={2} >
        {
          userData.length == 0 ?

            currentPost.map((item, index) => {
              return (
                <AllCard key={index} item={item}/>
              )
            })

            : userData.map((item, index) => {
              return (
                  <AllCard key={index} item={item}/>
              )
            })
        }
      </Row>
      {
        userData.length > 0 ? null : <Pagination totalPosts={post.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      }
      <Dialog isOpenModal={isOpenModal} selData={selData} />
    </Container>
  )
}
