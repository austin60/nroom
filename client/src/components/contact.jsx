import React,{Component} from 'react';
import Navbar from './navbar';
import Mfooter from './mfooter';
import Email from './email'

class ContPage extends Component{
    render(){
        return(
            <div className='page'>
                <Navbar/>
                  <Email/>
                <Mfooter/>
            </div>
        )
    }
}
export default ContPage;