import React,{Component} from 'react';
import AdminNav from './adminnav'; 
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
class Write extends Component{
    state={
        title:"",
        category:"",
        content:"",
        author:""
    }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    notify = () => toast("post created successfully!");
    handleSubmit=(e)=>{
        e.preventDefault();

        const newBlog={
         title:this.state.title,
         category:this.state.category,
         content:this.state.content,
         author:this.state.author
        }

      this.props.createBlog(newBlog);
      this.props.fetchBlog();
      this.notify();
    }
    render(){
        return(
           
            <div className='page'>
                <AdminNav/>
                  <form action="" className='admin-form' onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id='title'  required placeholder='enter title' name="title" onChange={this.handleChange}/><br />
                    </div>
                    <div>
                    <label htmlFor="category">Category</label><br />
                    <select name="category" id="category" required onChange={this.handleChange}>
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
                    data={this.state.content}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({content:data})
                    } }
                />
       
                    </div>
                 
                   <div>
                    <label htmlFor="author">Author</label><br/>
                    <select name="author" id="author" required onChange={this.handleChange}>
                        <option value="">select name</option>
                        <option value="Laura Achieng'">Laura Achieng'</option>
                        <option value="Brentford Were">Brentford Were</option>
                        <option value="Jack Kinyua">Jack Kinyua</option>
                    </select><br/>
                    </div>

                    <button type="submit">Create Post</button>
                  </form>

                <Footer/>
                <ToastContainer/>
            </div>
        )
    }
}
export default Write;