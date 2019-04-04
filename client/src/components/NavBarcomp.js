import React from 'react';
import './NavBarcomp.css'
import book from '../book.png'

const NavBarcomp = () => {
  return (
    <div>
      <header>
        <img src={book} alt="illustrated icon of books" />
        <nav>
         <ul>
           <li><a href="#">Best Sellers</a></li>
           <li><a href="#">My Books</a></li>
         </ul>
       </nav>
     </header>
    </div>
  )
}

export default NavBarcomp;
