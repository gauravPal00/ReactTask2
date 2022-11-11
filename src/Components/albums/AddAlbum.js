import { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postAlbumData,updateAlbumData } from '../../redux/actions/album';



export const AddAlbum = () => {

  const dispatch = useDispatch()
  let Location = useLocation()
  let data = Location.state
  const [validated, setValidated] = useState(false);
  const [valueAlbum,setValueAlbum] = useState({
    userId:"",
    title:""
  })
 

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

  
  const submitHandler = (event) => {  
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    event.preventDefault();
      setValidated(true);
    }
    else{ 
      event.preventDefault();
      if(data){
        dispatch(updateAlbumData(valueAlbum))
        setValidated(false);
        setValueAlbum({
          title: "",
          userId: "",
        })
        }
      else{
        dispatch(postAlbumData(valueAlbum))
        setValidated(false);
        setValueAlbum({
          title: "",
          userId: "",
        })
      }
     
    }
  };

 

  return (
    <Container>
    <Form noValidate className='needs-validation' onSubmit={submitHandler}  validated={validated}>
      <Form.Group className="mb-3" >
        <Form.Label>User Id :</Form.Label>
        <Form.Control required type="number" name="userId" value={valueAlbum.userId} placeholder="Enter Your User id" onChange={handler} />
        <Form.Control.Feedback type="invalid">
            Please fill a userID
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Title :</Form.Label>
          <Form.Control required value={valueAlbum.title} name="title" as="textarea" placeholder="Leave a comment here" onChange={handler} />
          <Form.Control.Feedback type="invalid">
            Please fill a title
          </Form.Control.Feedback>
      </Form.Group>
      {
          data ? <Button type='submit' variant="danger" >
            Update
          </Button> :
            <>
              <Button  type='submit'  variant="primary" >
                Submit
              </Button>
              <Button style={style} onClick={resetHandler} variant='info'>Reset</Button>
            </>
        }
    </Form>
  </Container>
  )
}
