import {ADD_USER}from './constant'
const initialstate=[];

export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_USER:
            return[
                ...state,
                action.data
            ]

            default : 
            return state
    }
}