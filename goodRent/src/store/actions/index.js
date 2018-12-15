import { CITY_DATA,LIST_DATA } from '../constant'
import { createAction } from 'redux-actions'

export const cityDataAction = createAction(CITY_DATA) 
export const listDataAction = createAction(LIST_DATA) 

// export const cityDataAction = createAction(CITY_DATA,function(data){
//     return data;
// }) 
// export const listDataAction = createAction(LIST_DATA,function(data){
//     return data;
// }) 

// export function cityDataAction(data){
//     return {
//         type:CITY_DATA,
//         data
//     }
// }