import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {   useNavigate } from 'react-router-dom';
import { modalHandler } from '../../redux/actions/album';
import { deletePostHandler, PostCommentsFetch } from '../../redux/actions/post';

export const AllCard = ({item}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const editHandle = (item) => {
    navigate("/addpost", { state: item })
  }

  const mainHandle = (id) => {
    dispatch(PostCommentsFetch(id))
    dispatch(modalHandler(true))
  }

  

  const style = {
    margin: "10px 0"
  }
  
  return (
    <Col>
          <Card style={style} onClick={() => { mainHandle(item.id) }} >
            <Card.Body style={{height:"200px",overflowY:"scroll"}} >
              <Card.Title>{item.id} : {item.title}</Card.Title>
              <Card.Text>
                {item.body}
              </Card.Text>
            </Card.Body>
         </Card>
          <Button style={{marginRight:"5px"}} variant="danger" onClick={()=>{dispatch(deletePostHandler(item.id))}}>DELETE</Button>      
             <Button onClick={()=>{editHandle(item)}} variant='warning'>Edit</Button>
       </Col>
  )
}
