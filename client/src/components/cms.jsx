import React,{Component} from 'react'
import AdminNav from './adminnav';
import Footer from './footer';
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Zoom from 'react-reveal/Zoom';
import  Modal  from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class CMS extends Component{
    state={
        blog:null,
        editTitle:'',
        editContent:'',
        editCategory:'',
        id:''
    }
    notify = () => toast("updated successfully!");
    closeModal=(blog)=>{
        this.setState({blog:null})
    }
   //function to open modal
    openModal=(blog)=>{
        this.setState({blog})
    }
    //set state to blog properties
    handleState=(blog)=>{
       this.setState({editTitle:blog.title,editContent:blog.content,editCategory:blog.category,id:blog._id})
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       const {id}=this.state;
       
         const editContent=this.state.editContent;
         const editCategory=this.state.editCategory;
         const editTitle=this.state.editTitle
    
         this.props.updateBlog(id,editContent,editCategory,editTitle)
         this.props.fetchBlog();
         this.closeModal();
         this.notify();
    }
    render(){
        const {blogs}=this.props;
        const {blog,editTitle,editCategory,editContent}=this.state;
        
        return(
            <div>
            <div className='page'>
            <AdminNav/>

            {
               blogs.length<1?<div>Loading...</div>:blogs.map(blog=> <div className='cms-bar' key={blog._id}>
                    <div className='cms-title'>{blog.title}</div>
                    <div className='cms-btns'>
                        <button onClick={()=>{this.openModal(blog); this.handleState(blog)}}><AiFillEdit/></button>
                        <button onClick={()=>this.props.handleDelete(blog)}><BsFillTrashFill /></button>
                        
                        </div>
                </div>)
            }
            {
                blog &&(
                    <Modal isOpen={true} onRequestClose={this.closeModal}  ariaHideApp={false} contentLabel="Selected Option">
                        <Zoom>
                        <div>
                    <form action="" className='admin-form edit' onSubmit={this.handleSubmit} >
                    <div>
                    <label htmlFor="editTitle">Title</label><br />
                    <input type="text" required placeholder='enter title' name="editTitle" value={editTitle} onChange={this.handleChange}/><br />
                    </div>
                    <div>
                    <label htmlFor=" editCategory">Category</label><br />
                    <select name="editCategory" id="category" required value={editCategory} onChange={this.handleChange} >
                        <option value="">select category</option>
                        <option value="Politics">Politics</option>
                        <option value="Developing">Developing</option>
                        <option value="Sports">Sports</option>
                        <option value="Business">Business</option>
                    </select><br />
                    </div>

                    <div>
                    <CKEditor
                    editor={ ClassicEditor }
                    data={editContent}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({editContent:data})
                    } }
                />
       
                    </div>
                    <div className="modal-btns">
                            <button type='submit'>Save</button>
                            <button onClick={this.closeModal}>Cancel</button>
                        </div>

                        
                  </form>
                        </div>
                      
                        </Zoom>
                    </Modal>
                    
                )
            }
            <Footer/>
        </div>
        <ToastContainer />
        </div>
        )
    }
}

export default CMS