import axios from "axios"
// post api
export const userFetch = ()=>{
    return dispatch => {
            axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
                dispatch(fetchUserSuccess(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}


export const fetchUserSuccess = (data) => {
    return{
        type:"FETCHUSERSUCCESS",
        payload:data
    }
}

// user api
export const userFetch1 = ()=>{
    return dispatch =>{
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                dispatch(fetchUserSuccess1(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserSuccess1 = (data) => {
    return{
        type:"FETCHUSERSUCCESS1",
        payload:data
    }
}

// get user post

export const userFetch2 = (id)=>{
    return dispatch =>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then((res)=>{
                dispatch(fetchUserSuccess2(res.data))
              
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserSuccess2 = (data) => {
    return{
        type:"FETCHUSERSUCCESS2",
        payload:data
    }
}



// get comments

export const userFetch3 = (id)=>{
    return dispatch => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res)=>{
                dispatch(fetchUserSuccess3(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserSuccess3 = (data) => {
    return{
        type:"FETCHUSERSUCCESS3",
        payload:data
    }
}

// modal
export const modalHandler = (modal) => {
    return{
        type:"OPENMODAL",
        payload:modal
    }
}

// delete api

export const deleteHandler = (id)=>{
    return dispatch => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id} `).then((res)=>{
            dispatch(fetchUserdelete(res.data))
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        }) 
    }
}

export const fetchUserdelete = (data) => {
    console.log(data);
    return{
        type:"FETCHUSERDELETE",
    }
}


// post api

export const postHandler = (data)=>{
   const data1 = {
    title:data.title,
    body:data.body,
    userId:data.userId
   }
    return dispatch => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`,data1).then((res)=>{
            alert("Succefully Added")
        }).catch((err)=>{
            console.log(err);
        }) 
    }
}

// edit data api 


export const updateHandler = (data)=>{
    console.log(data.id);
    return dispatch => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id} `,data).then((res)=>{
            console.log(res);
            alert("updated")
        }).catch((err)=>{
            console.log(err);
        }) 
    }
}

