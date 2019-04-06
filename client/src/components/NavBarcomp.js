import React from 'react';
import './NavBarcomp.css'
import book from '../book.png'
import { NavLink} from 'react-router-dom';

const NavBarcomp = () => {
  return (
    <div>
      <header>
        <NavLink to="/"><img src={book} alt="illustrated icon of books" /></NavLink>
        <nav>
         <ul>
           <li><NavLink to="/bestsellers" exact >NYT Best Sellers List</NavLink></li>
           <li><NavLink to="/books">My Books</NavLink></li>
         </ul>
       </nav>
     </header>
    </div>

  )
}

export default NavBarcomp;
