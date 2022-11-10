import { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { postDataHandler, PostupdateHandler } from './Action/PostIndex';


export const AddPost = ({state}) => {
  let Location = useLocation()
  let data = Location.state
 
     let navigate =  useNavigate()

   const dispatch = useDispatch()
  const [inpVal, setInpVal] = useState({
    title: "",
    userId: "",
    body: ""
  })

  const handler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInpVal({ ...inpVal, [name]: value })
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

  const style ={
    marginLeft:"10px"
  }
  
  const updatetHandler = ()=>{
    if (inpVal.userId === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your userd-Id "
    }
    else if (inpVal.title === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your title "
    }
    else if (inpVal.body === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your body description "
    }
    else {
      dispatch(PostupdateHandler(inpVal))
      navigate("/")
      document.getElementById("demo").innerHTML = ""
      setInpVal({
        title: "",
        body: "",
        userId: "",
      })
    }
  }

  const resetHandler = ()=>{
    setInpVal({
      title:"",
      body:"",
      userId:""
    })
  }
 
  const submitHandler = () => {

    if (inpVal.userId === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your userd-Id "
    }
    else if (inpVal.title === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your title "
    }
    else if (inpVal.body === "") {
      document.getElementById("demo").innerHTML = " Please Enter Your body description "
    }
    else {
      dispatch(postDataHandler(inpVal))
      document.getElementById("demo").innerHTML = ""
      setInpVal({
        title: "",
        body: "",
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

        <Form.Group className="mb-3" >
          <Form.Label>Body :</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Enter your description"
            className="mb-3"
          >
            <Form.Control value={inpVal.body} name="body" as="textarea" placeholder="Leave a comment here" onChange={handler} />
          </FloatingLabel>
        </Form.Group>
        <p style={{ color: "red" }} id='demo'></p>
    {
      data ? <Button onClick={updatetHandler} variant="danger" >
      Update
    </Button>:
    <>
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
