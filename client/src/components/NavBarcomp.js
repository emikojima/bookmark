import React from 'react';
import './NavBarcomp.css'
import book from '../book.png'
import { NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBarcomp = (props) => {
  return (
    <div>
      <header>
        <Navbar expand="sm" variant="light" bg="light">
        <NavLink to="/"><img src={book} alt="illustrated icon of books" /></NavLink>
        <nav>
         <ul>
           <li><NavLink to="/bestsellers-fiction" exact >Fiction Best Sellers</NavLink></li>
           <li><NavLink to="/bestsellers-nonfiction" exact >Nonfiction Best Sellers</NavLink></li>
           <li><NavLink to="/bestsellers-science" exact >Science Best Sellers</NavLink></li>
           <li><NavLink to={`/users/${props.userId}/books`}>My Books</NavLink></li>
           <li><NavLink to="/logout">Log Out</NavLink></li>
         </ul>
       </nav>
       </Navbar>
     </header>
    </div>

  )
}

export default NavBarcomp;
