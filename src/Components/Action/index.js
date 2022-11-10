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
    return dispatch => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id} `,data).then((res)=>{
            alert("updated")
        }).catch((err)=>{
            
            console.log(err);
        }) 
    }
}

// album api get

export const userAlbumFetch = ()=>{
    return dispatch => {
            axios.get(" https://jsonplaceholder.typicode.com/albums").then((res)=>{
                dispatch(fetchUserSuccess(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}



export const userAlbumFetchData = (id)=>{
    return dispatch => {
            axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((res)=>{
                dispatch(fetchUserSuccess4(res.data))
                
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserSuccess4 = (data)=>{
    return{
        type:"FETCHALBUMDATA",
        payload:data
    }
}

export const deletealbumHandler = (id)=>{
    return dispatch => {
        axios.delete(`https://jsonplaceholder.typicode.com/albums/${id} `).then((res)=>{
            dispatch(fetchAlbumdelete(res.data))
            alert("DELETED")
        }).catch((err)=>{
            console.log(err);
        }) 
    }
}



export const fetchAlbumdelete = (data) => {
    
    return{
        type:"FETCHUSERDELETE",
    }
}


export const albumHandler = (data)=>{
    const data1 = {
        title:data.title,
        body:data.body,
        userId:data.userId
       }
        return dispatch => {
            axios.post(`https://jsonplaceholder.typicode.com/albums`,data1).then((res)=>{
                console.log(res);
                alert("Succefully Added")
            }).catch((err)=>{
                console.log(err);
            }) 
        }
}


export const updateAlbumHandler = (data)=>{
    return dispatch => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id} `,data).then((res)=>{
            alert("updated")
        }).catch((err)=>{
            console.log(err);
        }) 
    }
}
 