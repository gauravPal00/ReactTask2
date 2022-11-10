import {Dialog} from './Modal'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AlbumDataDelete, modalHandler, AlbumDataFetch, AlbumUserDataFetch } from './Action/AlbumIndex'
import { Pagination } from './Pagination'
import { useNavigate } from 'react-router-dom'

export const AllAlbum = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let {post} = useSelector((state)=>state.FetchReducers)
  const selData =  useSelector((state) => state.FetchReducers.albumData)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = post.slice(firstPostIndex, lastPostIndex)
  const {isOpenModal} = useSelector((state)=>state.FetchReducers)

  const style = {
    margin: "10px 0"
  }
  const style1 = {
    marginLeft:"10px "
  }
  useEffect(()=>{
    dispatch(AlbumDataFetch())
  },[])

  const mainHandle = (id)=>{
    dispatch(AlbumUserDataFetch(id))
    dispatch(modalHandler(true))
   }
   const editHandle = (item)=>{
    navigate("/addalbum",{state:item})
  }
  return (
    <Container>
      <Row lg={3} sm={1} md={2} >{
      currentPost.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Col>
                  <Card style={style} onClick={()=>{mainHandle(item.id)}} >
                    <Card.Body >
                      <Card.Title>{item.id}</Card.Title>
                      <Card.Text>
                      {item.title}
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                  <Button onClick={()=>{dispatch(AlbumDataDelete(item.id))}} variant="danger">DELETE</Button>
                  <Button style={style1} onClick={()=>{editHandle(item)}} variant='warning'>Edit</Button>
                </Col>
              </React.Fragment>
            )
          })
        }
      </Row>
      <Pagination  totalPosts={post.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      <Dialog isOpenModal={isOpenModal} selData={selData}/>
    </Container>
  )
}
