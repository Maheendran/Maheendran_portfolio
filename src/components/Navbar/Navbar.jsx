import React from 'react'
import './Navbar.css'
import {Link} from'react-scroll'
import { NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi';
const Navbar = () => {
  return (
    <>
<div class="navbar navbar-expand-lg nav_cover navMain">

       
  <div class="container-fluid nav_main">
  <div className='animation_nav'>
       <img  src="./assets/walking.gif"alt="" />
       </div>
    <NavLink to='/'>
<img className='logo' src="./assets/mahi-1.png" alt="" />
    </NavLink>
    <p class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <HiMenu fontSize={'2rem'}/>
        
        </p>
 

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav ms-auto">

<li>  
    <Link className='link_style'
spy={true} to={"home"} smooth={true}
duration={1} offset={-15}activeClass='activeClass' >
   <p className="nav-item nav-link " >HOME</p>
</Link></li>

<li>  
    <Link className='link_style'
spy={true} to={"about"} smooth={true}
duration={1} offset={-15} 
activeClass='activeClass ' >
   <p className="nav-item nav-link" >ABOUT</p>
</Link>
</li>

<li>  
    <Link className='link_style' duration={1} activeClass='activeClass'
spy={true} to={"work"} smooth={true}>
   <p className="nav-item nav-link" >WORK</p>
</Link></li>
<li>  
    <Link className='link_style' activeClass='activeClass'
spy={true} to={"skills"} smooth={true}>
   <p className="nav-item nav-link" href="">SKILLS</p>
</Link></li>
<li>  
    <Link className='link_style' activeClass='activeClass'
spy={true} to={"contact"} smooth={true}>
   <p className="nav-item nav-link" href="">CONTACT</p>
</Link></li>

      </ul></div>
    </div>
  </div>

    </>
  )
}

export default Navbar