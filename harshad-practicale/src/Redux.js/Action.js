import {ADD_USER}from './constant'


export const addUser =(item)=>{
return {
    type:ADD_USER,
    data:item
}
}