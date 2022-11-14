
const initialstate ={
    post: [],
    user:[],
    userData : [],
    selData:[],
    editData:[],
    albumData:[],
    isOpenModal:false,
    error:""
}

export const FetchReducers = (state=initialstate,action) => {
    switch(action.type){
        case "FETCHUSERPOST":
            const data = action.payload
            return {
                ...state,
                post:data
            }

            case "FETCHUSER":
            const data1 = action.payload
            return {
                ...state,
                user:data1
            }


            case "FETCHUSERPOSTBYID":
            const data2 = action.payload
            return {
                ...state,
                userData:data2
            }


            case "FETCHUSERCOMMENTS":
            const data3 = action.payload
            return {
                ...state,
                selData:data3,
            }

            case "FETCHALBUMDATA":
                return{
                    ...state,
                    albumData:action.payload
                }
            case "OPENMODAL":
                return{
                    ...state,
                    isOpenModal:action.payload
                }

                case "ERRORHANDLE":
                    return{
                        ...state,
                        error:action.payload
                    }
                 
        default :
        return state
    }
}