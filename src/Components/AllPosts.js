
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
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

  const style = {
    margin: "10px 0"
  }

  // react pagination
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setpageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(post.slice(itemOffset, endOffset))
    setpageCount(Math.ceil(post.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, post])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % post.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(postDataFetch())
    dispatch(FetchUser())
  }, [])

  const selectDataHandler = (e) => {
    dispatch(PostUserDataFetch(e.target.value))
  }

  useEffect(() => {
    if (location.pathname == "/") {
      dispatch(PostUserDataFetch(0))
    }
  }, [])


  return (
    <Container>
      <h3>All Post</h3>
      <center>
        <select style={style} onChange={selectDataHandler}>
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
            currentItems.map((item, index) => {
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
      </Row>
      {
        userData.length > 0 ? null :
          <ReactPaginate
            breakLabel=".."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='page-num page-num1'
          />
      }

      <Dialog isOpenModal={isOpenModal} selData={selData} />
    </Container>
  )
}
