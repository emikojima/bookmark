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
        <nav>
         <ul>
           <li><NavLink to="/"><img src={book} alt="illustrated icon of books" /></NavLink></li>
           <li><NavLink to="/bestsellers-fiction" exact >Fiction</NavLink></li>
           <li><NavLink to="/bestsellers-nonfiction" exact >Nonfiction</NavLink></li>
           <li><NavLink to="/bestsellers-science" exact >Science</NavLink></li>
           <li><NavLink to={`/users/${props.username}/books`}>My Books</NavLink></li>
           <li><NavLink to="/logout">Log Out</NavLink></li>
         </ul>
       </nav>
       </Navbar>
     </header>
    </div>

  )
}

export default NavBarcomp;
