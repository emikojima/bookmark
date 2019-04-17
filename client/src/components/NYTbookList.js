import React from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from './ShowMyBooksButton';
import BookGenreDropDown from './BookGenreDropDown';

const NYTbookList = () => {
   return(
      <div className="bodymargin">
        <ShowMyBooksButton />
        <hr/>
        <BookGenreDropDown />
      </div>
    );
  };

export default NYTbookList;
