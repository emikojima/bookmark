import React from 'react';

 const SearchBar = (props) => {
   return (
     <>
     <form>
       <input
         placeholder="Search for..."
         onChange={(event)=>props.getsearch(event.target.value)}
       />
     </form>
     </>
   )}

export default SearchBar;
