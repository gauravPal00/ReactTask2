
import React, { useEffect, useState } from 'react'
import {  Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from './Pagination'
import { Dialog } from './Modal'
import { AllCard } from './AllCard'
import { postDataFetch, PostUserDataFetch } from './Action/PostIndex'
import { FetchUser } from './Action/UserIndex'
import { useLocation } from 'react-router-dom'

export const AllPosts = () => {
  const dispatch = useDispatch()
  const location = useLocation()


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
  const [data,setData] = useState("")


  useEffect(() => {
    dispatch(postDataFetch())
    dispatch(FetchUser())
  }, [])

  const selectDataHandler =  (e)=>{
    dispatch(PostUserDataFetch(e.target.value))
  }

  useEffect(()=>{
    if(location.pathname == "/"){
      dispatch(PostUserDataFetch(0))
    }
  },[])
  return (
    <Container>
      <h3>All Post</h3>
      <center>
        <select  style={style} onChange={selectDataHandler}>
          <option >Choose username</option>
          {
            user.map((item, index) => {
              return (
                <React.Fragment key={index} >
                  <option label={item.username} value={item.id}>{""}</option>
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
