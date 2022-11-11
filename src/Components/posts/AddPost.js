import { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postDataHandler, PostupdateHandler } from '../../redux/actions/post';



export const AddPost = ({ state }) => {
  let Location = useLocation()
  let data = Location.state
  const dispatch = useDispatch()
  const [inpVal, setInpVal] = useState({
    title: "",
    userId: "",
    body: ""
  })
  const [validated, setValidated] = useState(false);

  const handler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInpVal({ ...inpVal, [name]: value })
  }


  useEffect(() => {
    if (data) {
      setInpVal(data)
    }
    else {
      setInpVal({
        title: "",
        userId: "",
        body: ""
      })
    }
  }, [])

  const style = {
    marginLeft: "10px"
  }

 

  const resetHandler = () => {
    setInpVal({
      title: "",
      body: "",
      userId: ""
    })
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
        dispatch(PostupdateHandler(inpVal))
        setValidated(false);
        setInpVal({
          title: "",
          body: "",
          userId: ""
        })
        }
      else{
        dispatch(postDataHandler(inpVal))
        setValidated(false);
        setInpVal({
          title: "",
          body: "",
          userId: ""
        })
      }
     
    }
  };

  return (
    <Container>
      <Form noValidate className='needs-validation' onSubmit={submitHandler}  validated={validated}>
        <Form.Group className="mb-3" >
          <Form.Label>User Id :</Form.Label>
          <Form.Control required type="number" name="userId" value={inpVal.userId} placeholder="Enter Your User id" onChange={handler} />
          <Form.Control.Feedback type="invalid">
            Please fill a userID
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Title :</Form.Label>
          <Form.Control required value={inpVal.title} name="title" as="textarea" placeholder="Leave a comment here" onChange={handler} />
          <Form.Control.Feedback type="invalid">
            Please fill a title
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Body :</Form.Label> 
            <Form.Control required value={inpVal.body} name="body" as="textarea" placeholder="Leave a comment here" onChange={handler} />
          <Form.Control.Feedback type="invalid">
            Please fill a Description
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
