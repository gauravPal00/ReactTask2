import {Dialog} from '../../Components/modal/Modal'
import React, { useEffect, useState } from 'react'
import {  Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  AlbumDataFetch } from '../../redux/actions/album'
import ReactPaginate from 'react-paginate'
import {AllAlbumCard} from './AllAlbumCard'

export const AllAlbum = () => {

  const dispatch = useDispatch()
  let {post} = useSelector((state)=>state.FetchReducers)
  const selData =  useSelector((state) => state.FetchReducers.albumData)
  const {isOpenModal} = useSelector((state)=>state.FetchReducers)
 
  

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
  useEffect(()=>{
    dispatch(AlbumDataFetch())
  },[])

 
  return (
    <Container>
      <Row lg={3} sm={1} md={2} >{
      currentItems.map((item, index) => {
            return (
             <AllAlbumCard key={index} item={item}/>
            )
          })
        }
      </Row>

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
     
      <Dialog isOpenModal={isOpenModal} selData={selData}/>
    </Container>
  )
}
