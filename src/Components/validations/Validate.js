import React from 'react'

export const Validate = (inpVal) => {
    let errors= {};
    if(!inpVal.title){
        errors.title="Title is required"
    }
    if(!inpVal.body){
        errors.body="Description is required"
    }
   
    if(!inpVal.userId){
        errors.userId="userID is required"
    }
  return errors;
}
