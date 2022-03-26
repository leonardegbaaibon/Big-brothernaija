import React from 'react';
import './Header.css'
// import logo from './BBNlogo'


const Header = () => {
    return(
        <div>
            <div>
            {/* <img src={BBNlogo} alt="logo" /> */}
            </div>
            <div className='main-head'>
            {/* <svg className="SVG">
    <ellipse cx="240" cy="50" rx="220" ry="30" fill="yellow" />
    <ellipse cx="220" cy="50" rx="190" ry="20" fill="white" />
    Sorry, your browser does not support inline SVG.
  </svg> */}
                 <h2 className='bigLogo-name'>BBN.<i className='logo-name'>bet</i></h2>
                 {/* <svg width="100" height="">
                  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
                </svg> */}
            </div>
        </div>
    )
}


export default Header;
