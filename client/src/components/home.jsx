import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Home extends Component{
    render(){
        return(
            <div className='page homepage'>
                <Navbar/>
                 
                <Footer/>
            </div>
        )
    }
}
export default Home;