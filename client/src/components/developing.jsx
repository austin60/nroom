import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Developing extends Component{
    render(){
        const{blogs}=this.props
        return(
            <div className='page'>
                <Navbar/>
                {
                    blogs.length<1?<div>Loading...</div>:blogs.filter(blog=>blog.category==="Developing").map(blog=><div className="content" key={blog._id}>
                    <h3>{blog.title}</h3>
                    <p dangerouslySetInnerHTML={{__html:blog.content}}></p>
                    <span>by:{blog.author}</span>
                  </div>)}
                <Footer/>
            </div>
        )
    }
}
export default Developing;