
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from '../../Components/modal/Modal'
import { postDataFetch, PostUserDataFetch } from '../../redux/actions/post'
import { FetchUser } from '../../redux/actions/user'
import { useLocation } from 'react-router-dom'
import { AllCard } from './AllCard'
import { Main } from '../pagination/Main'

export const AllPosts = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const { error } = useSelector((state) => state.FetchReducers)
  const { post } = useSelector((state) => state.FetchReducers)
  const { user } = useSelector((state) => state.FetchReducers)
  const { userData } = useSelector((state) => state.FetchReducers)

  const { isOpenModal } = useSelector((state) => state.FetchReducers)
  const { selData } = useSelector((state) => state.FetchReducers)

  const style = {
    margin: "10px 0"
  }


  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage= 10
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = post.slice(firstPostIndex, lastPostIndex)


  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(PostUserDataFetch(0))
    }
      dispatch(postDataFetch())
      dispatch(FetchUser())
  }, [dispatch,location.pathname])

  const selectDataHandler = (e) => {
    dispatch(PostUserDataFetch(e.target.value))
  }


  const mainData = error ? <h3>{error}</h3> :
    <>
      {
        userData.length === 0 ?
          currentPost.map((item, index) => {
            return (
              <AllCard key={index} item={item} />
            )
          })

          : userData.map((item, index) => {
            return (
              <AllCard key={index} item={item} />
            )
          })
      }
    </>


  const pagination = error ? "" : <>
    {
      userData.length > 0 ? null : <Main currentPage={currentPage} totalPosts={post.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
    }
  </>

  const select = <select style={style} onChange={selectDataHandler}>
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


  return (
    <Container>
      <center>
        <h3>All Post</h3>
        {select}
      </center>

      <Row lg={3} sm={1} md={2} >
        {mainData}
      </Row>

      {pagination}

      <Dialog isOpenModal={isOpenModal} selData={selData} />
    </Container>
  )
}
