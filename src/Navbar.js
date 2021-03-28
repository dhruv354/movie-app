import React from 'react';
import './Navbar.css'
class Navbar extends React.Component{


    render(){
        return(
            <div className='navbar'>
                <div className='search-container'>
                    <input />
                    <button id='search-button'>Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar;