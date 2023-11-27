import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './navbar.scss'
import { PiChartBarHorizontalFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div>
        <div className='navbar'>
      <div className='logo'>
      <Link to={'/'} className='navbarLink'><p>Dazzling Demo</p></Link>
      </div>
      <div className='navbarBtns'>
        <ul className='btnUl'>

          <li>
          <NavLink activeClassName="active"  to={'/'}>Home</NavLink>
          </li>
          <li className=''>
          <NavLink activeClassName="active"  to={'/gallery'}>Gallery</NavLink>
          </li>
          <li className=''>
          <NavLink activeClassName="active"  to={'/shortcodes'}>Shorcodes</NavLink>
          </li>
          <li className='aboutLi'>
          <Link activeClassName="active"  >About
          <IoIosArrowDown className='arrow' />
          <div className='aboutsubmenu'>
          <ul >
            <li>
                <NavLink activeClassName="active"  className='subMenuLink' to={'/markup'}>
                  <PiChartBarHorizontalFill />
                  <p> Page Markup And Formatting</p>
                </NavLink>
                
            </li>
            <li>
                <NavLink activeClassName="active"  className='subMenuLink' to={'/contact'} >
                <IoIosMail />
                   <p>  Contact Form</p>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"  className='subMenuLink' to={'/image'}>
                <FaRegImage />
                <p> Page Image Alignment (Full-Width)</p>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"  className='subMenuLink' to={'/clearing'}>
                <FaLeaf />
             <p>  Clearing Floats</p>
                </NavLink>
            </li>
            
          </ul>
          <div className='options'>
            <p>Comment options</p>
          </div>
          <ul >
            <li>
                <NavLink activeClassName="active"  className='subMenuLink' to={'/commentAble'}>
                <FaCommentAlt />
                  <p>  Page with comments</p>
                </NavLink>
                
            </li>
            <li>
                <NavLink activeClassName="active"  className='subMenuLink' to={'/commentDisable'} >
                <FaXmark />
                   <p> Page with comments disabled</p>
                </NavLink>
            </li>
          </ul>
          <div className='options'>
            <p>More options</p>
          </div>
          <div className='disabled'>
          <p>This item is disabled</p>
          </div>
          </div>
          
            </Link>
          </li>
          <li>
          <NavLink activeClassName="active"  to={'/language'}>Language</NavLink>
          </li>
        </ul>
        
      </div>
        </div>
    </div>

  )
}

export default Navbar

