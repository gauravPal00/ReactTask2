import React from 'react'

export const Validate1 = (inpVal) => {
    
    let errors= {};
    if(!inpVal.title){
        errors.title="Title is required"
    }
    if(!inpVal.userId){
        errors.userId="userID is required"
    }
  return errors;
}