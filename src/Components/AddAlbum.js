import { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { albumHandler, updateAlbumHandler } from './Action';



export const AddAlbum = () => {

  const dispatch = useDispatch()
  let Location = useLocation()
  const navigate = useNavigate()
  let data = Location.state
  const [inpVal,setInpVal] = useState({
    userId:"",
    title:""
  })

  const resetHandler = ()=>{
    setInpVal({
      title:"",
      userId:""
    })
  }

  const style ={
    marginLeft:"10px"
  }

  useEffect(()=>{
    if(data){
      setInpVal(data)
    }
    else {
      setInpVal({
        title: "",
        userId: "",
        body: ""
      })
    }
  },[])

  const handler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInpVal({ ...inpVal, [name]: value })
  }

  const updatetHandler = ()=>{
    if (inpVal.userId === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your userd-Id "
    }
    else if (inpVal.title === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your title "
    }
    else{
      dispatch(updateAlbumHandler(inpVal))
      navigate("/allalbum")
      document.getElementById("demo").innerHTML = ""
      setInpVal({
        title: "",
        userId: "",
      })
  
    }
  }

  const submitHandler = () => {
    if (inpVal.userId === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your userd-Id "
    }
    else if (inpVal.title === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your title "
    }
    else{
      dispatch(albumHandler(inpVal))
      document.getElementById("demo").innerHTML = ""
      setInpVal({
        title: "",
        userId: "",
      })
     
    }
  }

  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>User Id :</Form.Label>
        <Form.Control type="number" name="userId" value={inpVal.userId} placeholder="Enter Your User id" onChange={handler} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Title :</Form.Label>
        <FloatingLabel

          controlId="floatingTextarea"
          label="Enter your title"
          className="mb-3"
        >
          <Form.Control value={inpVal.title} name="title" as="textarea" placeholder="Leave a comment here" onChange={handler} />
        </FloatingLabel>
      </Form.Group>
      <p style={{ color: "red" }} id='demo'></p>
      {
      data ? <Button onClick={updatetHandler} variant="danger" >
      Update
    </Button>:<>
    <Button onClick={submitHandler} variant="primary" >
      Submit
    </Button>
     <Button style={style} onClick={resetHandler} variant='info'>Reset</Button>
     </>
    }
    </Form>
  </Container>
  )
}
