import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AlbumDataDelete, AlbumUserDataFetch, modalHandler } from '../../redux/actions/album'

export const AllAlbumCard = ({ item }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const style = {
   card:{
    margin: "10px 0"
   },
   cardBody:{
    height:"100px",
    overflowY:"scroll"
   },
   button:{
    marginLeft: "10px "
   }

  }
 
  const mainHandle = (id) => {
    dispatch(AlbumUserDataFetch(id))
    dispatch(modalHandler(true))
  }

  const editHandle = (item) => {
    navigate("/addalbum", { state: item })
  }


  return (
    <Col>
      <Card style={style.card} onClick={() => { mainHandle(item.id) }} >
        <Card.Body style={style.cardBody}>
          <Card.Title>{item.id}</Card.Title>
          <Card.Text>
            {item.title}
          </Card.Text>

        </Card.Body>
      </Card>
      <Button onClick={() => { dispatch(AlbumDataDelete(item.id)) }} variant="danger">DELETE</Button>
      <Button style={style.button} onClick={() => { editHandle(item) }} variant='warning'>Edit</Button>
    </Col>

  )
}
