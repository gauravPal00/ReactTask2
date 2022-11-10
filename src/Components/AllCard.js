import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { deleteHandler } from './Action/AlbumIndex';

export const AllCard = ({item}) => {

  const style = {
    margin: "10px 0"
  }
  console.log(item);
  return (
    <Col>
          <Card style={style}  >
            <Card.Body>
              <Card.Title>{item.id} : {item.title}</Card.Title>
              <Card.Text>
                {item.body}
              </Card.Text>
            </Card.Body>
         </Card>
          {/* <Button style={{marginRight:"5px"}} variant="danger" onClick={()=>{dispatch(deleteHandler(item.id))}}>DELETE</Button>       */}
             {/* <Button onClick={()=>{editHandle(item)}} variant='warning'>Edit</Button> */}
       </Col>
  )
}
