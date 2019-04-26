import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NYTbookList.css';
import ShowMyBooksButton from '../ShowMyBooksButton';
import BookGenreDropDown from '../BookGenreDropDown';
import BestSellers from '../../container/BestSellers';
import UserBooks from '../UserBooks/UserBooks';

class NYTbookList extends Component {

    state = {
      show: false
    }
    componentDidMount() {
      if(this.props.books.length === 0) {
        this.props.getUserBooks(this.props.user)
      }
    }

    toParent = (x) => {
      this.setState({show: x})
    }
render() {
 const display = this.state.show===true ? {} : {display: "none"}
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

const mapStateToProps =  state => {
  return ({
    books: state.user.books
  })
}

export default connect(mapStateToProps)(NYTbookList);
