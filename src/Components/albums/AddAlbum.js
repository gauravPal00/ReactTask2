import { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { postAlbumData,updateAlbumData } from '../../redux/action/album';
import { Validate1 } from '../validations/Validate1';


export const AddAlbum = () => {

  const dispatch = useDispatch()
  let Location = useLocation()
  const navigate = useNavigate()
  let data = Location.state
  const [valueAlbum,setValueAlbum] = useState({
    userId:"",
    title:""
  })
  const[errors,setErrors] = useState({})

  const[dataIstrue,setDataIstrue] = useState(false)
  const[dataIsupdate,setDataIsupdate] = useState(false)

  const resetHandler = ()=>{
    setValueAlbum({
      title:"",
      userId:""
    })
  }

  const style ={
    marginLeft:"10px"
  }

  useEffect(()=>{
    if(data){
      setValueAlbum(data)
    }
    else {
      setValueAlbum({
        title: "",
        userId: "",
      })
    }
  },[])

  const handler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setValueAlbum({ ...valueAlbum, [name]: value })
  }

  const updatetHandler = (e)=>{
    e.preventDefault()
    setErrors(Validate1(valueAlbum))
    setDataIsupdate(true)
    
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setErrors(Validate1(valueAlbum))
    setDataIstrue(true)
  
  }

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIstrue){
      dispatch(postAlbumData(valueAlbum))
      setValueAlbum({
        title: "",
         userId: "",
      })
      
  }
  else if(Object.keys(errors).length === 0 && dataIsupdate){
    dispatch(updateAlbumData(valueAlbum))
       navigate("/allalbum")
       setValueAlbum({
         title: "",
         userId: "",
       })
  }
  },[errors])

  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>User Id :</Form.Label>
        <Form.Control type="number" name="userId" value={valueAlbum.userId} placeholder="Enter Your User id" onChange={handler} />
        {errors.userId && <p className='error'>{errors.userId}</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Title :</Form.Label>
        <FloatingLabel

          controlId="floatingTextarea"
          label="Enter your title"
          className="mb-3"
        >
          <Form.Control value={valueAlbum.title} name="title" as="textarea" placeholder="Leave a comment here" onChange={handler} />
        </FloatingLabel>
        {errors.title && <p className='error'>{errors.title}</p>}
      </Form.Group>

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
