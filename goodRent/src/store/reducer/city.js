import { CITY_DATA,LIST_DATA } from '../constant'
import { handleActions } from 'redux-actions'

export const listdata = handleActions({
    [LIST_DATA]:(state,action) =>{
        return [...state,...action.payload.list]
    }
},[])
export const citydata = handleActions({
    [CITY_DATA]:(state,action) => {
        return action.payload
    }
},[])
// export function citydata(state=[],payload){
//     if(payload.type == CITY_DATA){
//         return payload.payload
//     }
//     else if(payload.type == 'TEST'){
//         console.log(payload.data)
//     }
//     return state
// }