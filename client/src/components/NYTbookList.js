import React from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from './ShowMyBooksButton';
import BestSellers from '../container/BestSellers'

const NYTbookList = () => {
   return(
      <>
        <ShowMyBooksButton />
        <BestSellers />
      </>
    );
  };

export default NYTbookList;
