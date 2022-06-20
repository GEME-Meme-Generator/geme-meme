import React from 'react'
import '../Css/Header.css'
import {Navbar ,Nav } from 'react-bootstrap'
import { Link  } from 'react-router-dom'

export default function MainHeader() {
  return (
    <div>
         <Navbar collapseOnSelect  expand="md"  variant='light' style={{backgroundColor:'white',font:'caption'}} className="headerbg">
                <Navbar.Brand  href="/" ><img src='./geme.jpg' style={{width:215,height:60,backgroundColor:'white'}} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='collapsess font-head'>
                    <Nav >
                    <Nav.Link as={Link} to='/' className="text-black"> Home </Nav.Link>
                    <Nav.Link as={Link} to='/about'> About us</Nav.Link>
                    <Nav.Link as={Link} to='/features'> Feature</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/privacy'>Privacy</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             </Navbar> 
    </div>
  )
}
