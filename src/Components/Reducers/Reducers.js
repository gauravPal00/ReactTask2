
const initialstate ={
    post: [],
    user:[],
    userData : [],
    selData:[],
    editData:[],
    isOpenModal:false,
}

export const FetchReducers = (state=initialstate,action) => {
    switch(action.type){
        case "FETCHUSERSUCCESS":
            const data = action.payload
            return {
                ...state,
                post:data
            }

            case "FETCHUSERSUCCESS1":
            const data1 = action.payload
            return {
                ...state,
                user:data1
            }


            case "FETCHUSERSUCCESS2":
            const data2 = action.payload
            console.log(data2);
            return {
                ...state,
                userData:data2
            }


            case "FETCHUSERSUCCESS3":
            const data3 = action.payload
            return {
                ...state,
                selData:data3,
            }

            case "OPENMODAL":
                return{
                    ...state,
                    isOpenModal:action.payload
                }

                 
        default :
        return state
    }
}