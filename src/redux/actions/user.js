import axios from "axios"

// user api

export const FetchUser = ()=>{
    return  (dispatch) =>{
           axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                dispatch(fetchUserSuccess1(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserSuccess1 = (data) => {
    return{
        type:"FETCHUSER",
        payload:data
    }
}