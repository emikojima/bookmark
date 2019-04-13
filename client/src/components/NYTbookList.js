import React from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from './ShowMyBooksButton';
import BestSellers from '../container/BestSellers'
import BookGenreDropDown from './BookGenreDropDown'

const NYTbookList = () => {
   return(
      <>
        <ShowMyBooksButton />
        <BookGenreDropDown />
      </>
    );
  };

export default NYTbookList;
