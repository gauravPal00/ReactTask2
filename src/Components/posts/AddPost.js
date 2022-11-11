import { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {postDataHandler,PostupdateHandler } from '../../redux/action/post';
import { Validate } from '../validations/Validate';


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

  const[errors,setErrors] = useState({})

  const[dataIstrue,setDataIstrue] = useState(false)
  const[dataIsupdate,setDataIsupdate] = useState(false)

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
  
  const updatetHandler = (e)=>{
    e.preventDefault()
      setErrors(Validate(inpVal))
      setDataIsupdate(true)
  }

  const resetHandler = ()=>{
    setInpVal({
      title:"",
      body:"",
      userId:""
    })
  }
 
  const submitHandler = (e) => {
    e.preventDefault()
    setErrors(Validate(inpVal))
    setDataIstrue(true)
    
  }

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIstrue){
      dispatch(postDataHandler(inpVal))
      setInpVal({
        title: "",
        body: "",
         userId: "",
      })
      
  }
  else if(Object.keys(errors).length === 0 && dataIsupdate){
    dispatch(PostupdateHandler(inpVal))
       navigate("/")
       setInpVal({
         title: "",
         body: "",
         userId: "",
       })
  }
  },[errors])
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>User Id :</Form.Label>
          <Form.Control type="number" name="userId" value={inpVal.userId} placeholder="Enter Your User id" onChange={handler} />
          {errors.userId && <p className='error'>{errors.userId}</p>}
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
          {errors.title && <p className='error'>{errors.title}</p>}
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
          {errors.body && <p className='error'>{errors.body}</p>}
        </Form.Group>
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
