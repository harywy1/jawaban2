import React , { Component } from 'react';
import '../App.css';
import Followers from './Followers';


class Page extends Component {
    render () {
        return (
            <div className='Page'>
                <headers className='Page-header'>
                    
                </headers>
                <Followers />
            </div>
        )
    }
}

export default Page;