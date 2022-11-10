
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteHandler, modalHandler, userFetch, userFetch1, userFetch2, userFetch3 } from './Action'
import { Pagination } from './Pagination'
import  {Dialog} from './Modal'

export const AllPosts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { post } = useSelector((state) => state.FetchReducers)
  const  {user} = useSelector((state) => state.FetchReducers)
  const {userData} = useSelector((state) => state.FetchReducers) 
  const {isOpenModal} = useSelector((state)=>state.FetchReducers)
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
    dispatch(userFetch())
    dispatch(userFetch1())
  }, [])

  const mainHandle = (id)=>{
       dispatch(userFetch3(id))
       dispatch(modalHandler(true))
      }
     const editHandle = (item)=>{
        navigate("/addpost",{state:item})
      }

  return (
    <Container>
      <h3>All Post</h3>
     <center>
       <select style={style} onChange={(e) => dispatch(userFetch2(e.target.value))}>
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
              <React.Fragment key={index}>
                <Col>
                  <Card style={style} onClick={()=>{mainHandle(item.id)}} >
                    <Card.Body>
                      <Card.Title>{item.id} : {item.title}</Card.Title>
                      <Card.Text>
                        {item.body}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Button style={{marginRight:"5px"}} variant="danger" onClick={()=>{dispatch(deleteHandler(item.id))}}>DELETE</Button>      
                     <Button onClick={()=>{editHandle(item)}} variant='warning'>Edit</Button>
                </Col>
              </React.Fragment>
            )
          })
          
           : userData.map((item,index)=>{
            return(
              <React.Fragment key={index}>
                <Col>
                  <Card style={style} >
                    <Card.Body>
                      <Card.Title>{item.id} : {item.title}</Card.Title>
                      <Card.Text>
                        {item.body}
                      </Card.Text>
                      <Button style={{marginRight:"5px"}} variant="danger" onClick={()=>{dispatch(deleteHandler(item.id))}}>DELETE</Button>
                                 <Button style={{marginRight:"5px"}}  onClick={()=>{mainHandle(item.id)}} variant="info">Comments</Button>
                                 <Button onClick={()=>{editHandle(item)}} variant='warning'>Edit</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </React.Fragment>
            )
          })
        }
      </Row>
     {
      userData.length>0 ? null: <Pagination  totalPosts={post.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
     }
      <Dialog isOpenModal={isOpenModal} selData={selData}/>
    </Container>
  )
}
