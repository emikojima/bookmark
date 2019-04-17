import React from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from './ShowMyBooksButton';
import BookGenreDropDown from './BookGenreDropDown';

const NYTbookList = () => {
   return(
      <>
        <ShowMyBooksButton />
        <hr />
        <BookGenreDropDown />
      </>
    );
  };

export default NYTbookList;
