import React from 'react';
import './TopNavbar.css';
// import logo1 from './Green 01.png'
import logo from './Group 4.png';

export default function TopNavbar() {
  return (
    <>
    <div className='topNavbar'>

        {/* <img className='logoMain' src={logo1} alt='mainLogo' /> */}
        <svg width="38" height="86" viewBox="0 0 38 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.21343 21.3888V15.3284H27.4756V21.3888H5.21343ZM25.3438 59.67V15.3284H32.9879V59.67H25.3438Z" fill="#FFDDD2"/>
          <path d="M32.3542 64.4565V70.5169H10.092V64.4565H32.3542ZM12.2238 26.1753V70.5169H4.57976V26.1753H12.2238Z" fill="#E29578"/>
        </svg>

        <h1 className='headingTitle'>
            Large
        </h1>
        <img className='logo' src={logo} alt='logo' />

    

    </div>
    </>
  )
}
