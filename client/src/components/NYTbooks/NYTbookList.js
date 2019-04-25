import React, { Component } from 'react';
import './NYTbookList.css';
import ShowMyBooksButton from '../ShowMyBooksButton';
import BookGenreDropDown from '../BookGenreDropDown';
import BestSellers from '../../container/BestSellers';
import UserBooks from '../UserBooks/UserBooks';
class NYTbookList extends Component {

    state = {
      show: true
    }
    
    toParent = (x) => {
      this.setState({show: x})
    }
  render() {
    const display = !!this.state.show ? {} : {display: "none"}
   return(
      <div className="bodymargin">
        <ShowMyBooksButton toParent={this.toParent}/>
        <UserBooks display={display} />
        <hr/>
        <BookGenreDropDown />
        <BestSellers />
      </div>
    );
  }
};

export default NYTbookList;
