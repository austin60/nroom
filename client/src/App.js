import React,{Component} from 'react'
import Home from './components/home';
import Developing from './components/developing';
import Sports from './components/sport';
import Politics from './components/politics';
import Business from './components/business';
import ContPage from './components/contact';
import Write from './components/write';
import CMS from './components/cms';
import './App.css';
import {connect} from 'react-redux'
import {  BrowserRouter as Router,Routes,  Route} from "react-router-dom";
import { createBlog,fetchBlog,updateBlog,deleteBlog } from './redux/actions/actions';



class App extends Component{

  //func to delete from db
  handleDelete=(blog)=>{
    const id=blog._id
    this.props.deleteBlog(id);
    this.props.fetchBlog();
     console.log("done")
   }
   componentDidMount=()=>{
   this.props.fetchBlog();
   console.log(`blogs is ${this.props.blogs}`)
   }
    
  render(){
    const {blogs,updateBlog,fetchBlog,createBlog}=this.props
    return(
      
      <Router>
     < div className='container-fluid'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/developing' element={<Developing blogs={blogs} />}/>
        <Route path='/sports' element={<Sports blogs={blogs}/>}/>
        <Route path='/business' element={<Business blogs={blogs}/>}/>
        <Route path='/politics' element={<Politics blogs={blogs}/>}/>
        <Route path='/contact' element={<ContPage blogs={blogs}/>}/>
        <Route path='/admin/create' element={<Write fetchBlog={fetchBlog} 
                                                    createBlog={createBlog}/>}/>
        <Route path='/admin/manage' element={<CMS blogs={blogs}  handleDelete={this.handleDelete} 
                                                                 fetchBlog={fetchBlog}
                                                                 updateBlog={updateBlog}/>}/>
      </Routes>
     </div>
     </Router>
    )
  }
}
//connect func returns state from redux store
export default connect((state)=>({blogs:state.blogs.items}),{createBlog,fetchBlog,updateBlog,deleteBlog})(App);
