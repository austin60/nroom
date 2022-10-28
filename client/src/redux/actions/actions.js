import axios from "axios"
import { BLOG_CREATED,BLOG_READ,BLOG_UPDATED,BLOG_DELETED } from "../types/types";

//create data
export const createBlog=(newBlog)=>async dispatch=>{
   const resp=await axios.post('http://localhost:4000/newsblog/post',newBlog);
   dispatch({
      type:BLOG_CREATED,
      payload:resp.data
   })
}
//read from db
export const fetchBlog=()=>async dispatch=>{
   const resp=await axios.get('http://localhost:4000/newsblog');
   dispatch({
       type:BLOG_READ,
       payload:resp.data
   })
}


//update db data
export const updateBlog=(id,editContent,editCategory,editTitle)=>async dispatch=>{
    const resp= await axios.put(`http://localhost:4000/newsblog/admin/edit/${id}`,{editContent:editContent,editCategory:editCategory,editTitle:editTitle});
    dispatch({
        type:BLOG_UPDATED,
        payload:resp.data
    });
}
//delete from db
export const deleteBlog=(id)=>async dispatch=>{
   await axios.delete(`http://localhost:4000/newsblog/admin/delete/${id}`);
    dispatch({
        type:BLOG_DELETED,
        payload:id
    })
}