import React from 'react';
import './NavBarcomp.css'
import book from '../book.png'

export default function NavBarcomp(){

    return (
      <div>
        <header>
          <img src={book} alt="illustrated icon of books" />
          <nav>

             <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Pricing</a></li>
               <li><a href="#">Terms of use</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
         </nav>
       </header>
      </div>
    )
}
