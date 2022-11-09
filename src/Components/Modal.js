import React, { useEffect, useState } from 'react'
import {  Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { modalHandler } from './Action'


export const Dialog = ({ isOpenModal }) => {
  const dispatch = useDispatch()
  const { selData } = useSelector((state) => state.FetchReducers)
  const [data,setData] = useState([])
  const closeHandler = () => {
    dispatch(modalHandler(false))
  }
  useEffect(()=>{
    setData(selData)
  },[selData])
  return (
    <Modal show={isOpenModal}>
      <Modal.Header closeButton onClick={closeHandler} >
        {
          data.length>0 && <h3>Comments</h3>
        }
      </Modal.Header>
      <Modal.Body>
        { data.length>0 &&
           <table className="table">
           <thead>
             <tr>
               <th scope="col">postId</th>
               <th scope="col">ID</th>
               <th scope="col">Comment</th>
             </tr>
           </thead>
           <tbody>
             {
               data.map((item, index) => {
                 return (
                   <tr key={index}>
                     <td>{item.postId}</td>
                     <td>{item.id}</td>
                     <td>{item.body}</td>
                   </tr>
                 )
               })
             }
           </tbody>
         </table>
        }
       
      </Modal.Body>

    </Modal>
  )
}
