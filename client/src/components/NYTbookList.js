import React from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from './ShowMyBooksButton';
import BestSellers from '../container/BestSellers'

const NYTbookList = () => {
   return(
      <>
        <hr></hr>
        <ShowMyBooksButton />
        <hr></hr>
        <BestSellers />
      </>
    );
  };

export default NYTbookList;
