import React from 'react'
import {  Card, Col, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { modalHandler } from '../../redux/action/album'


export const Dialog = ({ isOpenModal ,selData}) => {
  const dispatch = useDispatch()

  const closeHandler = () => {
    dispatch(modalHandler(false))
  }

  const style = {
    height:"100px",
    weigth:"100px"

  }
  const style1 ={
    margin:"10px 0"
  }
 
  return (
    <Modal show={isOpenModal}>
      <Modal.Header closeButton onClick={closeHandler} >
      </Modal.Header>
      <Modal.Body>
      <Row lg={2} sm={1} md={1} >
        {
          selData.map((item,index)=>{
            return(
              <Col key={index} style={style1}>
              <Card >
                <Card.Body>

                  {
                      item.body ? <Card.Title>{item.id} : {item.title}</Card.Title> : null
                  }
                  
                  {
                    item.body ?
                    <Card.Text>
                    {item.body}
                  </Card.Text> :
                  <Card.Text>
                    <img style={style}  src={item.url} alt={item.thumbnailUrl}/>
                  </Card.Text>
                  }

                </Card.Body>
              </Card>
            </Col>
            )
          })
        }
     
      </Row>
      </Modal.Body>

    </Modal>
  )
}
