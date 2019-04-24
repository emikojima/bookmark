import React, { Component } from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from '../ShowMyBooksButton';
import BookGenreDropDown from '../BookGenreDropDown';
import BestSellers from '../../container/BestSellers';

class NYTbookList extends Component {
  render() {
   return(
      <div className="bodymargin">
        <ShowMyBooksButton />
          <hr/>
        <BookGenreDropDown />
        <BestSellers />
      </div>
    );
  }
};

export default NYTbookList;
