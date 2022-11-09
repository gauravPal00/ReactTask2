import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userFetch1, userFetch2 } from './Action';

export const Users = () => {
    const dispatch = useDispatch()

    const User = useSelector((state) => state.FetchReducers.user)
    const Userdata = useSelector((state) => state.FetchReducers.userData)
  
    useEffect(() => {
        dispatch(userFetch1())
    }, [User])

    const style = {
        margin:"10px",
        padding:"12px 10px",
        color:"white",
        backgroundColor:"#212529",
            borderRadius:"10px"
    }
    return (
        <>
        <Container>
            <select style={style} onChange={(e) => dispatch(userFetch2(e.target.value))}>
                <option>Choose username</option>
                {
                    User.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <option value={item.id}>{item.username}</option>
                            </React.Fragment>
                        )
                    })
                }
            </select>

            <Row lg={3} sm={1} md={2} >         
               {
                Userdata ?
                    Userdata.map((item, index) => {
                        return (
                            <React.Fragment key={index}> 
                            <Col>
                              <Card  style={style} >
                                <Card.Body>
                                  <Card.Title>{item.id} : {item.title}</Card.Title>
                                  <Card.Text>
                                    {item.body}
                                  </Card.Text>
                                 
                                </Card.Body>
                              </Card>
                            </Col>
                          </React.Fragment>
                        )
                    }) : ""
            }
            </Row>
            </Container>
        </>
    )
}
