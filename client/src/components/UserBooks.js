import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBooks } from '../actions/bookActions';

class UserBooks extends Component {
  componentDidMount() {
    console.log("USERBOOKS",this.props.user, this.props)
    this.props.getUserBooks(this.props.user)
  }
  render() {
    return(
      <div>
        HELLO!

    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    books: state.books,
    user: state.userId
  })
}
export default connect(mapStateToProps,{getUserBooks})(UserBooks)
