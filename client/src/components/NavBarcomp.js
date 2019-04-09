import React from 'react';
import './NavBarcomp.css'
import book from '../book.png'
import { NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBarcomp = () => {
  return (
    <div>
      <header>
        <Navbar >
        <NavLink to="/"><img src={book} alt="illustrated icon of books" /></NavLink>
        <nav>
         <ul>
           <li><NavLink to="/bestsellers" exact >NYT Best Sellers List</NavLink></li>
           <li><NavLink to="/books">My Books</NavLink></li>
           <li><NavLink to="/logout">Log Out</NavLink></li>
         </ul>
       </nav>
       </Navbar>
     </header>
    </div>

  )
}

export default NavBarcomp;
