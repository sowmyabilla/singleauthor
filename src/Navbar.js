import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo' ><img src="https://cdn.mindmajix.com/mern/images/logo-d.svg" alt="logo" /></div>
        <div className='all-courses'>ALL COURSES</div>
        <div className='all-resourses'>All Resourses</div>
        <div className='on-demand'>On-demand Webinars</div>
        <div className='community'>Community</div>
        <div className='subscribe'>SUBSCRIBE</div>
        <div className='user'><FaRegUserCircle /></div>
    </div>
  )
}

export default Navbar