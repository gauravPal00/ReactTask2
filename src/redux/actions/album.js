import axios from "axios"

export const modalHandler = (modal) => {
    return{
        type:"OPENMODAL",
        payload:modal
    }
}

// album api get

export  const  AlbumDataFetch = ()=>{
    return async (dispatch) => {
            await axios.get(" https://jsonplaceholder.typicode.com/albums").then((res)=>{
                dispatch(fetchAlbumsData(res.data))
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchAlbumsData = (data) => {
    return{
        type:"FETCHUSERPOST",
        payload:data
    }
}


export const AlbumUserDataFetch = (id)=>{
    return async (dispatch) => {
           await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((res)=>{
                dispatch(fetchUserAData(res.data))
                
            }).catch((err)=>{
                console.log(err);
            }) 
    }
}

export const fetchUserAData = (data)=>{
    return{
        type:"FETCHALBUMDATA",
        payload:data
    }
}

export const AlbumDataDelete = (id)=>{
    return async (dispatch) => {
       await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id} `).then((res)=>{
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


export const postAlbumData = (data)=>{
    const data1 = {
        title:data.title,
        body:data.body,
        userId:data.userId
       }
        return async (dispatch) => {
          await axios.post(`https://jsonplaceholder.typicode.com/albums`,data1).then((res)=>{
               
                alert("Succefully Added")
            }).catch((err)=>{
                console.log(err);
            }) 
        }
}


export const updateAlbumData = (data)=>{
    return async (dispatch) => {
       await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id} `,data).then((res)=>{
            alert("updated")
        }).catch((err)=>{
            console.log(err);
        }) 
    }
}
 