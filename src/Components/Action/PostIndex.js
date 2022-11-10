import axios from "axios"
// post api
export const postDataFetch = ()=>{
    return dispatch => {
            axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
                dispatch(fetchPostData(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchPostData = (data) => {
    return{
        type:"FETCHUSERPOST",
        payload:data
    }
}

// get user post

export const PostUserDataFetch = (id)=>{
    return dispatch =>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then((res)=>{
                dispatch(fetchUserPData(res.data))
              
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserPData = (data) => {
    return{
        type:"FETCHUSERPOSTBYID",
        payload:data
    }
}

// get comments

export const PostCommentsFetch = (id)=>{
    return dispatch => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res)=>{
                dispatch(fetchUserComments(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserComments = (data) => {
    return{
        type:"FETCHUSERCOMMENTS",
        payload:data
    }
}

// delete api

export const deletePostHandler = (id)=>{
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

export const postDataHandler = (data)=>{
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


export const PostupdateHandler = (data)=>{
    return dispatch => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id} `,data).then((res)=>{
            alert("updated")
        }).catch((err)=>{
            
            console.log(err);
        }) 
    }
}