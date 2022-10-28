import { BLOG_CREATED,BLOG_READ,BLOG_UPDATED,BLOG_DELETED } from "../types/types";

export const blogReducer=(state={},action)=>{
   switch(action.type){
    case BLOG_CREATED:return{
        ...state,items:action.payload
    }
    case BLOG_READ:return{
        items:action.payload
    }
    case BLOG_UPDATED:return{
        ...state,
        items:state.items.map(
        //is there an item with the same id as the payload?if true:if false
        item=>item.id===action.payload.id ? (item=action.payload):item )
    }
    case BLOG_DELETED:return{
        ...state, items:state.items.filter(item=>item.id !== action.payload)
    }
    default:return state
   }
}